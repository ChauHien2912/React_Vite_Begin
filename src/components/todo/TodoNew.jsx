const TodoNew = (props) => {
    console.log("<<< check log:", props)
    const { addNewTodo } = props;
    //addNewTodo()
    const handleClick = () => {
        alert("click me")
    }
    return (
        <div className='todo-new'>
            <input type="text" />
            <button
                style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
        </div>
    )
}

export default TodoNew;