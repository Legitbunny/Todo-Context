import { createContext, useContext, useState } from "react";


const TodoContext = createContext();

const inival = ["Learn context API"]

const TodoProvider = ({children}) => {
    const [todoList, setTodoList] = useState(inival);

    const addTodo = (newTodoItem) => {
        setTodoList([...todoList, newTodoItem])
    }

    const removeTodo = (todoIndex) => {
        const newTodoList = todoList.filter((_, index) => index !== todoIndex);
        setTodoList(newTodoList);
    }
    const contextValue = {
        todoList,
        addTodo,
        removeTodo
    };

    return (
        <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
    )
}

export const useTodoContext = () => useContext(TodoContext);

export default TodoProvider;