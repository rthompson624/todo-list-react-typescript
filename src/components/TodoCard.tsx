import * as React from 'react';
import { GrCheckbox, GrCheckboxSelected, GrTrash, GrEdit } from 'react-icons/gr';
import { ITodo } from '../models/todo';

export interface ITodoCardProps {
  todo: ITodo;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default function TodoCard (props: ITodoCardProps) {
  const [editMode, setEditMode] = React.useState<boolean>(false);
  const [nameEdit, setNameEdit] = React.useState<string>(props.todo.name);

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

  function handleEdit() {
    props.setTodos(todos => todos.map(todo => {
      if (todo.id === props.todo.id) {
        return { ...todo, name: nameEdit }
      } else {
        return todo;
      }
    }));
    setEditMode(false);
  }

  const bgColor = props.todo.complete ? 'bg-green-300' : 'bg-orange-300';
  const cardClasses = `flex justify-between items-start ${bgColor} p-3 m-3 rounded-lg`;
  return (
    <div className={ cardClasses }>
      { editMode
        ? <input value={ nameEdit } className='w-2/3 bg-yellow-200 rounded-md pl-2' onChange={ (event) => setNameEdit(event.currentTarget?.value) } onKeyPress={ (event) => event.key === 'Enter' ? handleEdit() : null } />
        : <div className='pr-3'>{ props.todo.name }</div>
      }
      <div className='flex mt-1'>
        <GrEdit onClick={ () => !editMode ? setEditMode(true) : null } className='cursor-pointer' />
        <GrTrash onClick={ () => handleDeleteClick() } className='cursor-pointer ml-4' />
        { props.todo.complete
          ? <GrCheckboxSelected onClick={ () => handleCompleteClick() } className='cursor-pointer ml-4' />
          : <GrCheckbox onClick={ () => handleCompleteClick() } className='cursor-pointer ml-4' />
        }
      </div>
    </div>
  );
}
