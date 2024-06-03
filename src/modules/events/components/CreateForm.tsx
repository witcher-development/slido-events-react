import { useForm } from 'src/hooks/useForm'

import { TextField } from 'src/components/forms'

import { createEventSchema } from '../schema'
import { getEmptyCreateData } from '../types'



export const CreateForm = () => {
    const { register, formState } = useForm({
        schema: createEventSchema,
        defaultValues: getEmptyCreateData(),
        mode: 'onChange'
    })
    // console.log(formState)
    return (
        <form>
            <TextField
                {...register('title')}
                label="Title"
            />
        </form>
    )
}
