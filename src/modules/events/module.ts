import { useEffect, useState } from 'react'

import { BucketModule } from 'src/modules/bucket'

import { EventsApi } from './'
import { Event, CreateFormData, EventPreview, DeleteData } from './types'


export const useList = () => {
    const [list, setList] = useState<EventPreview[]>([])

    const fetch = () => {
        EventsApi.fetchList().then(setList)
    }
    useEffect(() => {
        fetch()
    }, [])

    return [list, fetch] as const
}

export const useOne = (id: Event['id']) => {
    const [details, setDetails] = useState<Event | null>(null)

    useEffect(() => {
        EventsApi.fetchOne(id).then(setDetails)
    }, [])

    return details
}

export const create = async (data: CreateFormData) => {
    let bucketPath = null
    let filePath = null
    if (data.background) {
        bucketPath = await BucketModule.uploadFile(data.background[0])
        filePath = await BucketModule.getFileURL(bucketPath)
    }

    await EventsApi.post({
        ...data,
        background: filePath,
        backgroundBucketPath: bucketPath
    })
}

export const remove = async ({ id, filePath }: DeleteData) => {
    if (filePath) {
        await BucketModule.removeFile(filePath)
    }
    await EventsApi.remove(id)
}
