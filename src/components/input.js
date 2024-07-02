import { useEffect, useState } from "react";

const Input = (props) => {

    const [inputText, setInputText] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleInput = (e) => {
        setInputText(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        if (!isValid) {
            alert("Invalid text!!")
        }
        else {
            props.addTaskHandler(inputText);
            setInputText("")
        }
        e.preventDefault();
    }

    useEffect(() => {
        if (inputText.length > 0) {
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
    }, [inputText])

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter you task here"
                value={inputText}
                onChange={handleInput}
            />
            <button type="submit" disabled={!isValid}>Add Task</button>
        </form>
    )

}

export default Input;