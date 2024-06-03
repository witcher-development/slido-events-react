import { z } from 'zod'

import { createEventSchema } from './schema'


export type CreateData = z.infer<typeof createEventSchema>
export const getEmptyCreateData = (): CreateData => ({
    title: '',
    description: '',
    background: null
})

export type Event = CreateData & {
	id: number
}

export type EventPreview = Omit<Event, 'description'> 
