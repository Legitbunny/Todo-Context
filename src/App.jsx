import logo from './logo.svg';
import './App.css';
import TodoProvider from './context/TodoProvider';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          CONTEXT DEMO
        </h1>
      </header>

      <TodoProvider>
        <TodoInput/>
        <TodoList/>
      </TodoProvider>
    </div>
  );
}

export default App;
