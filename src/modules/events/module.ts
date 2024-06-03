import { useEffect, useState } from 'react'

import { Event, CreateData, EventPreview } from './types'
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

export const create = async (data: CreateData) => {
    await post(data)

    // This layer is extra now, but supposed to be a place to handle things like:
    // Notifications
    // Error handling
}
