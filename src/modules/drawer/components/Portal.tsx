import {
    PropsWithChildren,
    useEffect,
    useState,
    ReactNode
} from 'react'
import { createPortal } from 'react-dom'

import { delay } from 'src/helpers/delay'


const emptyRender = <></>
const getDrawerDOMNode = () => document.querySelector('#drawer')

export const Portal = ({ children }: PropsWithChildren) => {
    const [drawerNode, setDrawerNode] = useState(getDrawerDOMNode())
    const [render, setRender] = useState<ReactNode>(emptyRender)

    useEffect(() => {
        (async () => {
            const drawer = getDrawerDOMNode()
            if (!drawer) await delay(50)

            setDrawerNode(drawer)
            setRender(children)
        })()
    }, [children])

    if (!drawerNode) return render
    return createPortal(render, drawerNode)
}
