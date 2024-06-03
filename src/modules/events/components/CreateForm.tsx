import Plus from 'src/assets/plus.svg?react'

import { useForm } from 'src/hooks/useForm'

import { Button, Text } from 'src/components'
import { TextField, TextArea } from 'src/components/forms'

import { EventsTypes } from 'src/modules/events'
import { DrawerModule, DrawerComponents } from 'src/modules/drawer'

import { createEventSchema } from '../schema'
import { getEmptyCreateData } from '../types'



export const CreateForm = () => {
    const { register, handleSubmit } = useForm({
        schema: createEventSchema,
        defaultValues: getEmptyCreateData(),
        mode: 'onBlur'
    })

    const [drawerValue, setDrawerValue] = DrawerModule.useDrawer()

    const onSubmit = (data: EventsTypes.CreateData) => {
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

                        <TextArea
                            {...register('description')}
                            label="Description"
                        ></TextArea>

                        <Button type="submit" className="self-end">Submit</Button>
                    </form>
                </DrawerComponents.Portal>
            )}
        </>
    )
}
