import Plus from 'src/assets/plus.svg?react'

import { useForm } from 'src/hooks/useForm'

import { Button } from 'src/components'
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

    return (
        <>
            <Button onClick={() => setDrawerValue("new")}>
                <Plus style={{ width: "100%", height: "100%" }} />
                Create
            </Button>

            {drawerValue === "new" && DrawerModule.portalToDrawer(
                <form>
                    <TextField
                        {...register('title')}
                        label="Title"
                    />
                </form>
            )}
        </>
    )
}
