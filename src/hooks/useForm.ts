import { useForm as $useForm, UseFormProps, Path } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, Schema, TypeOf } from 'zod'


type Props<T extends Schema> = UseFormProps<z.infer<T>> & {
    schema: T
}

export const useForm = <T extends Schema>(
    props: Props<T>
) => {
    const { schema, ...rest } = props
    const result = $useForm<z.infer<T>>({
        resolver: zodResolver(props.schema),
        ...rest,
    })

    return {
        ...result,
        register: (field: Path<TypeOf<T>>) => {
            return {
                ...result.register(field),
                error: result.formState.errors[field]?.message
            }
        }
    }
}
