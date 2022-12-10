import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [currentValue, setcurrentValue] = useState("")

    const handleOnChange = ( { target } ) => {
        setcurrentValue(target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (currentValue.trim().length <= 1) return;
        onNewCategory(currentValue);
        setcurrentValue('')
    }

    return (
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    placeholder="Buscar gifts"
                    value = { currentValue }
                    onChange = { handleOnChange }
                />
             </form>
        )
}