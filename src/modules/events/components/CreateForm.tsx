import Plus from 'src/assets/plus.svg?react'

import { useForm } from 'src/hooks/useForm'
import { Button, Text } from 'src/components'

import { TextField, TextArea, FileUpload } from 'src/components/forms'

import { EventsTypes, EventsModule, EventsSchema } from 'src/modules/events'
import { DrawerModule, DrawerComponents } from 'src/modules/drawer'


type Props = {
    onSubmit: () => void
}

export const CreateForm = ({ onSubmit: onSubmitFromProps }: Props) => {
    const { register, handleSubmit, isValid } = useForm({
        schema: EventsSchema.createSchema,
        defaultValues: EventsTypes.getEmptyCreateData(),
        mode: 'all'
    })

    const [drawerValue, setDrawerValue] = DrawerModule.useDrawer()

    const onSubmit = (data: EventsTypes.CreateFormData) => {
        EventsModule.create(data).then(onSubmitFromProps)
    }

    return (
        <>
            <Button onClick={() => setDrawerValue('new')}>
                <Plus style={{ width: '100%', height: '100%' }} />
                Create
            </Button>

            {drawerValue === 'new' && (
                <DrawerComponents.Portal>
                    <form
                        className="flex flex-col gap-3 p-5 w-80"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Text
                            type="h3"
                            className="mb-4"
                        >
                            Create new Event
                        </Text>

                        <TextField
                            {...register('title')}
                            label="Title"
                        />

                        <TextArea
                            {...register('description')}
                            label="Description (optional)"
                        ></TextArea>

                        <FileUpload {...register('background')} />

                        <Button
                            type="submit"
                            className="self-end"
                            disabled={!isValid}
                        >
                            Submit
                        </Button>
                    </form>
                </DrawerComponents.Portal>
            )}
        </>
    )
}
