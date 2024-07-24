import Client from "@/core/Client";

interface FormClientProps {
    client: Client
    changedClient?: (client: Client) => void
    canceled?: () => void
}

export default function FormClient(props: FormClientProps) {
    
}