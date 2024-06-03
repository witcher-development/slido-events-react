import { PropsWithChildren, useState } from 'react'
import { Text } from 'src/components/texts'


type Props = {
    color?: string
}

export const Hint = ({ color, children }: PropsWithChildren<Props>) => {
    const [visible, setVisible] = useState(false)

    return (
        <Text
            type='tiny'
            className="relative border border-solid border-gray-500 rounded-full w-4 h-4 text-center font-xs leading-[14px]"
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
                    className="absolute left-1/2 p-1"
                    style={{
                        top: 'calc(100% + 5px)',
                        transform: 'translate(-50%)'
                    }}
                >
                    {children}
                </Text>
            )}
        </Text>
    )
}
