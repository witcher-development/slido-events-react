import { useForm as $useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, Schema } from 'zod'


type Props<T extends Schema> = UseFormProps<z.infer<T>> & {
    schema: Schema
}

export const useForm = <T extends Schema>(
    props: Props<T>
) => {
    const { schema, ...rest } = props
    return $useForm<z.infer<T>>({ 
        resolver: zodResolver(props.schema),
        ...rest, 
    })
}
