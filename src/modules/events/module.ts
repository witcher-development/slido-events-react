import { useEffect, useState } from 'react'

import { BucketModule } from 'src/modules/bucket'

import { Event, CreateFormData, EventPreview } from './types'
import { fetchList, fetchOne, post } from './api'


export const useList = () => {
    const [list, setList] = useState<EventPreview[]>([])

    const fetch = () => {
        fetchList().then(setList)
    }
    useEffect(() => {
        fetch()
    }, [])

    return [list, fetch] as const
}

export const useOne = (id: Event['id']) => {
    const [details, setDetails] = useState<Event | null>(null)

    useEffect(() => {
        fetchOne(id).then(setDetails)
    }, [])

    return details

}

export const create = async (data: CreateFormData) => {
    let filePath = null
    if (data.background) {
        const bucketPath = await BucketModule.uploadFile(data.background[0])
        filePath = await BucketModule.getFileURL(bucketPath)
    }

    await post({
        ...data,
        background: filePath
    })
}
