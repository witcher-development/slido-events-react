import { produce } from 'immer'

import { Store } from 'src/store'


export const useDrawer = () => {
    const [store, setStore] = Store.use()
    return [
        store.drawer,
        (value: string) => {
            setStore(produce(store, (draft) => {
                draft.drawer = String(value)
            }))
        }
    ] as const
}
