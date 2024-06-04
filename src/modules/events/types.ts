import { z } from 'zod'

import { createSchema } from './schema'


export type CreateData = z.infer<typeof createSchema>
export const getEmptyCreateData = (): CreateData => ({
    title: '',
    description: '',
    background: null
})

export type Event = CreateData & {
	id: number
}

export type EventPreview = Omit<Event, 'description'> 
