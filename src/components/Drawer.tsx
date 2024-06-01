import { PropsWithChildren, useEffect, useState } from "react"
import { ClickOutside } from "./ClickOutside"

type Props = {
    open: boolean
    onClose: () => void
}

export const Drawer = ({ children, open, onClose }: PropsWithChildren<Props>) => {
    const [classes, setClasses] = useState<string[]>([])

    useEffect(() => {
        console.log('useEffect', open, classes)
        if (!open && !classes.length) return

        if (open && !classes.length) {
            setClasses(["!block"])
            setTimeout(() => {
                setClasses(["!block translate-x-[-100%]"])
            }, 1)
            return
        }

        if (!open && classes.length) {
            setClasses(["!block"])
            setTimeout(() => {
                setClasses([])
            }, 300)
            return
        }
    }, [open, classes])

    // console.log('render', open, classes)
    // if (!open && !classes.length) return null

    return (
        <ClickOutside onClick={onClose} enable={open}>
            <div className={`fixed left-full top-0 transition-transform translate-x-0 h-full bg-white hidden ${classes.join(' ')}`}>
                {children}
            </div>
        </ClickOutside>
    )
}
