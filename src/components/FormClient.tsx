import Client from "@/core/Client"
import Entries from "./Entries"
import { useState } from "react"
import ButtonNewClient from "./ButtonNewClient"

interface FormClientProps {
    client: Client
    changedClient?: (client: Client) => void
    canceled?: () => void
}

export default function FormClient(props: FormClientProps) {
    const id = props.client?.id ?? null
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)
    return (
        <div>
            {id ? (<Entries readOnly text="ID" value={id} className="mb-4" />) : false}
            <Entries text="Name" value={name} changedValue={setName} className="mb-4" />
            <Entries text="Age" type="number" value={age} changedValue={setAge} />

            <div className="flex justify-end mt-6">
                <ButtonNewClient className="mr-2">
                    {id ? 'Update' : 'Create'}
                </ButtonNewClient>
                <ButtonNewClient > Cancel </ButtonNewClient>
            </div>
        </div>
    )
}