import React from 'react'
import { useTodoContext } from '../context/TodoProvider'

const TodoList = () => {

    const { todoList, removeTodo} = useTodoContext();
  return (
    <div>
        <ul>

            { todoList.map((todo, index) => (
                <li key={index}>{todo}
                <button onClick={()=> removeTodo(index)}>X</button>
                </li>
            ))

            }
        </ul>
    </div>
  )
}

export default TodoList