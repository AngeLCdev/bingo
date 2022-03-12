import { useState } from 'react'
export default function useField() {
    const [value, setValue] = useState('')

    const onChange = ({ target }) => {
        setValue(target.value)
    }


    return {
        value,
        onChange
    }
}