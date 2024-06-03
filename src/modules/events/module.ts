import { useEffect, useState } from 'react'

import { Event, CreateData } from './types'
import { fetchList, post } from './api'


export const useList = () => {
    const [list, setList] = useState<Event[]>([])

    const fetch = () => {
        fetchList().then(setList)
    }
    useEffect(() => {
        fetch()
    }, [])

    return [list, fetch] as const
}

export const create = async (data: CreateData) => {
    await post(data)

    // This layer is extra now, but supposed to be a place to handle things like:
    // Notifications
    // Error handling
}
