import { useEffect } from 'react'


export const useEscapeEvent = (callback: () => void) => {
    useEffect(() => {
        const listener = (event: Event) => {
            // @ts-ignore
            if (event.key !== 'Escape') return
            callback()
        }
        document.addEventListener('keydown', listener)
        return () => document.removeEventListener('keydown', listener)
    }, [])
}
