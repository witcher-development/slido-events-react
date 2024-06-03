import Plus from 'src/assets/plus.svg?react'

import { useForm } from 'src/hooks/useForm'

import { Button, Text } from 'src/components'
import { TextField } from 'src/components/forms'

import { DrawerModule, DrawerComponents } from 'src/modules/drawer'

import { createEventSchema } from '../schema'
import { getEmptyCreateData } from '../types'



export const CreateForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        schema: createEventSchema,
        defaultValues: getEmptyCreateData(),
        mode: 'onBlur'
    })

    const [drawerValue, setDrawerValue] = DrawerModule.useDrawer()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
            <Button onClick={() => setDrawerValue("new")}>
                <Plus style={{ width: "100%", height: "100%" }} />
                Create
            </Button>

            {drawerValue === "new" && (
                <DrawerComponents.Portal>
                    <form className="flex flex-col gap-3 p-5 w-80" onSubmit={handleSubmit(onSubmit)}>
                        <Text type="h3" className="mb-4">Create new Event</Text>
                        <TextField
                            {...register('title')}
                            label="Title"
                        />

                        <Button type="submit" className="self-end">Submit</Button>
                    </form>
                </DrawerComponents.Portal>
            )}
        </>
    )
}
