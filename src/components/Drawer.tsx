import { produce } from "immer"

import { Store } from "src/store"

import { ClickOutside } from "./ClickOutside"


export const Drawer = () => {
    const [store, setStore] = Store.use()
    const close = () => {
        console.log('DRAWER CLOSE')
        setStore(produce(store, draft => {
            draft.drawer = ""
        }))
    }

    // useEffect(() => {
    //     const show = () => {
    //         console.log(ref.current)
    //         if (!ref.current) return
    //
    //         ref.current.classList.remove("translate-x-[-100%]")
    //         setTimeout(() => {
    //             if (!ref.current) return
    //             ref.current.classList.remove("!block")
    //         }, 300)
    //     }
    //
    //     const hide = () => {
    //         if (!ref.current) return
    //
    //         ref.current.classList.add("!block")
    //         setTimeout(() => {
    //             if (!ref.current) return
    //             ref.current.classList.add("translate-x-[-100%]")
    //         }, 1)
    //     }
    //
    //     if (!open) {
    //         show()
    //         return
    //     }
    //
    //     hide()
    //
        // if (!open && !classes.length) return
        //
        // if (open && !classes.length) {
        //     setClasses(["!block"])
        //     setTimeout(() => {
        //         setClasses(["!block translate-x-[-100%]"])
        //     }, 1)
        //     return
        // }
        //
        // if (!open && classes.length) {
        //     setClasses(["!block"])
        //     setTimeout(() => {
        //         setClasses([])
        //     }, 300)
        //     return
        // }
    // }, [open, ref.current])

    // console.log('render', open, classes)
    // if (!open && !classes.length) return null

    return (
        <ClickOutside onClick={close} enable={!!store.drawer}>
            <div id="drawer" className={`fixed left-full top-0 transition-transform translate-x-0 h-full bg-white ${!store.drawer && 'hidden'}`} />
        </ClickOutside>
    )
}
