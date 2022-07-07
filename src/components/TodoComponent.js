
function TodoComponent({todo}) {
    return (
        <div>
            <p>id - {todo.id} </p>
            <p>user id - {todo.userId} </p>
            <p>title - {todo.title} </p>
            <p>completed - {todo.completed.toString()} </p>
            <hr/>
        </div>
    );
}

export default TodoComponent;