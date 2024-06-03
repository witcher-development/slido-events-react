import Plus from 'src/assets/plus.svg?react'

import { useForm } from 'src/hooks/useForm'

import { Button, Text } from 'src/components'
import { TextField } from 'src/components/forms'

import { DrawerModule } from 'src/modules/drawer'

import { createEventSchema } from '../schema'
import { getEmptyCreateData } from '../types'



export const CreateForm = () => {
    const { register, formState } = useForm({
        schema: createEventSchema,
        defaultValues: getEmptyCreateData(),
        mode: 'onChange'
    })

    const [drawerValue, setDrawerValue] = DrawerModule.useDrawer()
    console.log(drawerValue)

    return (
        <>
            <Button onClick={() => setDrawerValue("new")}>
                <Plus style={{ width: "100%", height: "100%" }} />
                Create
            </Button>

            {drawerValue === "new" && DrawerModule.portalToDrawer(
                <form className="p-5 w-80">
                    <Text type="h3" className="mb-5">Create new Event</Text>
                    <TextField
                        {...register('title')}
                        label="Title"
                    />
                </form>
            )}
        </>
    )
}
