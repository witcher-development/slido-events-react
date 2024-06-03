import { cloneElement, useEffect, useRef } from "react";


type Props = {
    onClick: () => void,
    enabled?: boolean
    children: React.ReactElement<any>
}

export const ClickOutside = ({ children, onClick, enabled: enable = true }: Props) => {
    const ref = useRef<Element>(null)

    useEffect(() => {
        if (!enable) return
        const handleClick = (event: MouseEvent) => {
            if (!enable) return
            if (!event.target) return
            // @ts-ignore
            if (ref.current && !ref.current.contains(event.target)) {
                onClick();
            }
        };

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    })

    return <>{cloneElement(children, { ...children.props, ref })}</>
}
