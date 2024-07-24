interface EntriesProps {
    type?: 'text' | 'number'
    text: string
    value: any
    readOnly?: boolean
    className?: string
    changedValue?: (value: any) => void
}

export default function Entries(props: EntriesProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.text}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                readOnly={props.readOnly}
                onChange={(e) => props.changedValue?.(e.target.value)}
                className={`
                  boder border-purple-500 rounded-lg
                  focus: outline-none bg-gray-200 px-4 py-2 hover:outline-purple-200
                  ${props.readOnly ? '' : 'focus:bg-white' }
                `}
            />
        </div>
    )
}