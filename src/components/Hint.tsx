import { PropsWithChildren, useState } from 'react'

import { Text } from 'src/components/texts'


type Props = {
    color?: string
}

export const Hint = ({ color, children }: PropsWithChildren<Props>) => {
    const [visible, setVisible] = useState(false)

    return (
        <Text
            type="tiny"
            className="relative border border-solid border-gray-500 rounded-full w-[13px] h-[13px] text-center text-[10px] leading-[10px] pl-px pt-px cursor-pointer"
            style={color ? {
                color,
                borderColor: color
            } : {}}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            ?

            {visible && (
                <Text
                    type="tiny"
                    className="absolute left-1/2 py-1 px-2 bg-neutral-900 !text-neutral-200 rounded-lg"
                    style={{
                        bottom: 0,
                        left: 'calc(100% + 5px)',
                        width: 190,
                    }}
                >
                    {children}
                </Text>
            )}
        </Text>
    )
}
