import * as React from 'react';
import { ITodo } from '../models/todo';
import TodoCard from './TodoCard';

export interface IListTodosProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

export default function ListTodos (props: IListTodosProps) {
  return (
    <div className='w-2/5'>
      { props.todos.map(todo => <TodoCard key={ todo.id } todo={ todo } setTodos={ props.setTodos } />) }
    </div>
  );
}
