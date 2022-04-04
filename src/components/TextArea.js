import { useRef, useState } from "react"

const TextArea = () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const [text, setText] = useState('adada');

    const onChangeHandler = () =>{}
    return (
    <textarea 
    required
    value={text}
    onChange={(e) => {
        setText(e.target.value)
        e.style.height=e.target.scrollHeight
    }}
    />
    )
}

export default TextArea
