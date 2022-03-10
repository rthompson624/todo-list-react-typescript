import * as React from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodos from './components/ListTodos';
import TitleBar from './components/TitleBar';
import { Todo } from './models/todo';

export default function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  
  function handleCreate(todo: Todo) {
    todo.id = Date.now();
    setTodos(todos => [...todos, todo]);
  }

  return (
    <div className='flex flex-col items-center mt-5 font-mono'>
      <TitleBar />
      <CreateTodo onCreate={ (todo) => handleCreate(todo) } />
      <div className='flex justify-evenly w-full mt-5'>
        <ListTodos todos={ todos.filter(todo => !todo.complete) } setTodos={ setTodos } />
        <ListTodos todos={ todos.filter(todo => todo.complete) } setTodos={ setTodos } />
      </div>
    </div>
  );
}
