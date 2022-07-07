import {useEffect, useState} from "react";

import {apiTodos} from "../services";
import TodoComponent from "./TodoComponent";
function TodosComponent(props) {
    let [todos,setTodos]=useState([])

    useEffect(()=> {apiTodos().then(value => setTodos([...value]))
    },[])
    return (
        <div>
            {todos.map(todo => <TodoComponent todo={todo} key={todo.id}/>)}

        </div>
    );
}

export default TodosComponent;