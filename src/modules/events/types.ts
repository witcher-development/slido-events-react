import { z } from 'zod'

import { createSchema } from './schema'


export type CreateFormData = z.infer<typeof createSchema>
export const getEmptyCreateData = (): CreateFormData => ({
    title: '',
    description: '',
    background: null
})

export type CreateData = Omit<CreateFormData, 'background'> & {
    background: string | null
}

export type Event = CreateData & {
    id: number
}

export type EventPreview = Omit<Event, 'description'>
