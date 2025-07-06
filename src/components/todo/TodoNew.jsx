import { useState } from "react";

const TodoNew = (props) => {

    // UseState hook    
    //const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric")
    const { addNewTodo } = props;
    //addNewTodo()
    const handleClick = () => {
        addNewTodo(valueInput)
        setValueInput("")
        //console.log("<<<<< check value input: ", valueInput)
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
            />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                My value is = {valueInput}
            </div>
        </div>
    )
}

export default TodoNew;