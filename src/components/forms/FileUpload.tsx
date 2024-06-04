import {
    ChangeEvent,
    InputHTMLAttributes,
    forwardRef,
    useState
} from 'react'

import { Text } from 'src/components/texts'

import { textBoxStyles } from './styles'


type Props = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
}

export const FileUpload = forwardRef<HTMLInputElement, Props>(({ error, ...inputProps }, ref) => {
    const [file, setFile] = useState<File | null>(null)

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || !inputProps.onChange) return

        const uploadedFile = event.target.files[0]
        setFile(uploadedFile)

        inputProps.onChange(event)
    }

    return (
        <div className="w-full h-24 relative">
            {error && 'error'}

            <input
                id={inputProps.name}
                type="file"
                className="invisible"
                ref={ref}
                {...inputProps}
                onChange={onChange}
            />

            <label
                htmlFor={inputProps.name}
                className={`${textBoxStyles()} absolute inset-0 flex justify-center items-center bg-neutral-200 hover:bg-neutral-100 active:bg-neutral-200 active:shadow-inner cursor-pointer transition-colors`}
            >
                <Text type="tiny">
                    {!file && 'Choose file'}

                    {file && file.name}
                </Text>
            </label>
        </div>
    )
})
