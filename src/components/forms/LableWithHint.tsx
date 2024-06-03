import { Text, Hint } from 'src/components'


type Props = {
    label: string
    inputId?: string
    error?: string
}

export const LabelWithHint = ({ label, inputId, error }: Props) => {
    return (
        <div className='flex items-center gap-1'>
            <label htmlFor={inputId}>
                <Text type="tiny" className={`pl-0.5 ${error && 'text-red-500'}`}>
                    {label}
                </Text>
            </label>

            {error && <Hint color="rgb(239 68 68)">{error}</Hint>}
        </div>
    )
}
