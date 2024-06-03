import { z } from 'zod'


export const createEventSchema = z.object({
    title: z.string().min(3).max(20),
    description: z.string().min(0).max(50),
    background: z.string().nullable()
})
