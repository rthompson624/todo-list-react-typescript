import * as React from 'react';
import { GrCheckbox, GrCheckboxSelected, GrTrash } from 'react-icons/gr';
import { ITodo } from '../models/todo';

export interface ITodoCardProps {
  todo: ITodo;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default function TodoCard (props: ITodoCardProps) {
  function handleCompleteClick() {
    props.setTodos(todos => todos.map(todo => {
      if (todo.id === props.todo.id) {
        return { ...todo, complete: !todo.complete }
      } else {
        return todo;
      }
    }));
  }

  function handleDeleteClick() {
    props.setTodos(todos => todos.filter(todo => todo.id !== props.todo.id));
  }

  const bgColor = props.todo.complete ? 'bg-green-300' : 'bg-orange-300';
  const cardClasses = `flex justify-between items-start ${bgColor} p-3 m-3 rounded-lg`;
  return (
    <div className={ cardClasses }>
      <div className='pr-3'>{ props.todo.name }</div>
      <div className='flex mt-1'>
        <GrTrash onClick={ () => handleDeleteClick() } className='cursor-pointer' />
        { props.todo.complete
          ? <GrCheckboxSelected onClick={ () => handleCompleteClick() } className='cursor-pointer ml-4' />
          : <GrCheckbox onClick={ () => handleCompleteClick() } className='cursor-pointer ml-4' />
        }
      </div>
    </div>
  );
}
