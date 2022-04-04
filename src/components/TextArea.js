import { useState } from "react"

const TextArea = () => {
    const [text, setText] = useState('');

    const onChangeHandler = (e) => {
        const target = e.target ? e.target : e
        setText(target.value)
        target.style.height = `auto`
        target.style.height = `${target.scrollHeight}px`
    }
    return (
    <textarea 
    required
    placeholder="Add a comment..."
    value={text}
    onChange={(e) => onChangeHandler(e)}
    />
    )
}

export default TextArea
