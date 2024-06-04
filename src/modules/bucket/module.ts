import { createClient } from '@supabase/supabase-js'


const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME
const KEY = import.meta.env.VITE_API_KEY
const BUCKET_NAME = import.meta.env.VITE_BUCKET_NAME

const supabase = createClient(PROJECT_NAME, KEY)


export const uploadFile = async (file: File) => {
    const { data } = await supabase
        .storage
        .from(BUCKET_NAME)
        .upload(file.name, file, {
            cacheControl: '3600',
            upsert: false
        })

    return data?.path
};

export const getFileURL = async (path: string) => {
    const { data } = supabase
        .storage
        .from(BUCKET_NAME)
        .getPublicUrl(path)
    return data.publicUrl
}
