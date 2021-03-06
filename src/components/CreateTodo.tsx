import * as React from 'react';
import { ITodo } from '../models/todo';

export interface ICreateTodoProps {
  onCreate: (todo: ITodo) => void
}

export default function CreateTodo (props: ICreateTodoProps) {
  const [name, setName] = React.useState<string>('');

  function handleButtonClick() {
    if (name) {
      const todo: ITodo = { name, complete: false };
      props.onCreate(todo);
      setName('');
    }
  }

  return (
    <div className='flex w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 relative items-center'>
      <input value={ name } onChange={ (event) => setName(event.target.value) } onKeyPress={ (event) => event.key === 'Enter' ? handleButtonClick() : null } type='text' placeholder='Enter todo' className='bg-yellow-200 w-full rounded-3xl py-3 px-5' />
      <button onClick={ () => handleButtonClick() } type='button' className='absolute right-0 bg-yellow-600 hover:bg-yellow-500 active:scale-75 text-white w-10 h-10 rounded-3xl m-2 transition'>Go</button>
    </div>
  );
}
