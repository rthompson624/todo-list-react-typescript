import * as React from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodos from './components/ListTodos';
import TitleBar from './components/TitleBar';
import { ITodo } from './models/todo';

export default function App() {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  
  function handleCreate(todo: ITodo) {
    todo.id = Date.now();
    setTodos(todos => [...todos, todo]);
  }

  return (
    <div className='flex flex-col items-center mt-5 font-mono'>
      <TitleBar />
      <CreateTodo onCreate={ (todo) => handleCreate(todo) } />
      <div className='mt-5 w-full flex flex-col items-center md:flex-row md:justify-evenly md:items-start'>
        <ListTodos todos={ todos.filter(todo => !todo.complete) } setTodos={ setTodos } />
        <ListTodos todos={ todos.filter(todo => todo.complete) } setTodos={ setTodos } />
      </div>
    </div>
  );
}
