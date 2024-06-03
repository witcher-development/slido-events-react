import { z } from 'zod'


export const createEventSchema = z.object({
    title: z.string().min(2).max(5),
    description: z.string(),
    background: z.string().nullable()
})
