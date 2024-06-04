import { z } from 'zod'


export const createSchema = z.object({
    title: z.string().min(3).max(20),
    description: z.string().min(0).max(50),
    background: z.custom<FileList>((files) => {
        return files instanceof FileList && [...files].every(file => file instanceof File)
    }).nullable()

})
