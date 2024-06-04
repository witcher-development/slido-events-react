import Plus from 'src/assets/plus.svg?react'
import { useForm } from 'src/hooks/useForm'
import { Button, Text } from 'src/components'
import { TextField, TextArea } from 'src/components/forms'

import { EventsTypes, EventsModule, EventsSchema } from 'src/modules/events'
import { DrawerModule, DrawerComponents } from 'src/modules/drawer'
import { useState } from 'react'
import { uploadFile } from 'src/modules/bucket/module'


type Props = {
    onSubmit: () => void
}

export const CreateForm = ({ onSubmit: onSubmitFromProps }: Props) => {
    const { register, handleSubmit, isValid, setValue } = useForm({
        schema: EventsSchema.createSchema,
        defaultValues: EventsTypes.getEmptyCreateData(),
        mode: 'onBlur'
    })

    const [drawerValue, setDrawerValue] = DrawerModule.useDrawer()

    const [filePath, setFilePath] = useState("")
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const path = await uploadFile(file)
        setFilePath(path)
    }

    const onSubmit = (data: EventsTypes.CreateData) => {
        EventsModule.create({
            ...data,
            background: filePath
        }).then(onSubmitFromProps)
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
                            label="Description (optional)"
                        ></TextArea>

                        <input type="file" onChange={handleFileChange} />

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
