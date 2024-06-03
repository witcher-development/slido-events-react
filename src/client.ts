const LOCAL_STORAGE_KEY = "events-list"

const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const client = ({
    get: async () => {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (!data) return []
        return JSON.parse(data)
    },
    post: async (data: any) => {
        const existingData = await client.get()
        localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify([...existingData, { ...data, id: getRandomInt(1, 1000) }])
        )
    }
})
