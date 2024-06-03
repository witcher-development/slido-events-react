import { client } from 'src/client'
import { CreateData, Event, EventPreview } from './types'


const mapApiToEventPreview = (data: any): EventPreview => ({
    id: data.id,
    title: data.title,
    background: data.background
})
const mapApiToEvent = (data: any): Event => ({
    ...mapApiToEventPreview(data),
    description: data.description,
})

export const fetchList = async (): Promise<EventPreview[]> => {
    const data = await client.get()
    return (data as []).map(mapApiToEvent)
}

export const fetchOne = async (id: Event['id']): Promise<Event> => {
    const data = await client.getOne(id)
    return mapApiToEvent(data)
}

export const post = async (data: CreateData) => {
    await client.post(data)
}
