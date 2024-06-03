import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { produce } from 'immer'

import { Store } from 'src/store'


// export const portalToDrawer = (children: ReactNode) => {
//     const drawer = document.querySelector('#drawer')
//     if (!drawer) return
//     return createPortal(children, drawer)
// }

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
