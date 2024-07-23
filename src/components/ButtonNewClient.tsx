interface ButtonProps {
    className?: string
    children: any
    onClick?: () => void
}

export default function ButtonNewClient(props: ButtonProps) {
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-blue-400 to-purple-700
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}