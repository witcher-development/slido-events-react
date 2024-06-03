import { produce } from 'immer'
import { useEffect, useState, CSSProperties } from 'react'

import { Store } from 'src/store'
import { useEscapeEvent } from 'src/hooks/keyboard'

import { ClickOutside } from 'src/components/ClickOutside'


export const Drawer = () => {
    const [store, setStore] = Store.use()
    const [styles, setStyles] = useState<CSSProperties>({
        transform: 'translate(0)'
    })

    const close = () => {
        setStyles({})
        setTimeout(() => {
            setStore(produce(store, (draft) => {
                draft.drawer = ''
            }))
        }, 150)
    }
    useEscapeEvent(close)

    const opened = store.drawer !== ''
    useEffect(() => {
        if (!opened) return
        setStyles({ transform: 'translate(-100%)' })
    }, [opened])


    return (
        <ClickOutside
            onClick={close}
            enabled={opened}
        >
            <div
                id="drawer"
                className={'fixed left-full top-0 transition-transform h-full bg-white'}
                style={styles}
            />
        </ClickOutside>
    )
}
