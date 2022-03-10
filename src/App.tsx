import * as React from 'react';
import CreateTodo from './components/CreateTodo';
import TitleBar from './components/TitleBar';
import { Todo } from './models/todo';

export default function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);
  
  function handleCreate(todo: Todo) {
    todo.id = Date.now();
    setTodos(prevTodos => [...prevTodos, todo]);
  }

  return (
    <div className='flex flex-col items-center mt-5 font-mono'>
      <TitleBar />
      <CreateTodo onCreate={ (todo) => handleCreate(todo) } />
    </div>
  );
}
