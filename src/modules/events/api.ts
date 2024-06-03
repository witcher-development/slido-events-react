import { client } from 'src/client'
import { CreateData, Event } from './types'


const mapApiToEvent = (data: any): Event => ({
    id: data.id,
    title: data.title,
    description: data.description,
    background: data.background
})

export const fetchList = async (): Promise<Event[]> => {
    const data = await client.get()
    return (data as []).map(mapApiToEvent)
}

export const post = async (data: CreateData) => {
    await client.post(data)
}
