import { cloneElement, useEffect, useRef } from "react";


type Props = {
    onClick: () => void,
    enable?: boolean
    children: React.ReactElement<any>
}

export const ClickOutside = ({ children, onClick, enable = true }: Props) => {
    const ref = useRef<Element>(null)

    useEffect(() => {
        if (!enable) return
        const handleClick = (event: MouseEvent) => {
            if (!enable) return
            console.log('handle click appens')
            if (!event.target) return
            // @ts-ignore
            if (ref.current && !ref.current.contains(event.target)) {
                onClick();
            }
        };

        document.addEventListener('click', handleClick, true);

        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    })

    return <>{cloneElement(children, { ...children.props, ref })}</>
}
