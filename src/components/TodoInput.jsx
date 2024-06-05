import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoProvider'

const TodoInput = () => {
    const {todoList, addTodo} = useTodoContext();
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo){
            return;
        }
        addTodo(todo)
        console.log(todo);
        setTodo("");
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h2>Total Todos: {todoList.length}</h2>
            <input type="text" onChange={e => setTodo(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default TodoInput