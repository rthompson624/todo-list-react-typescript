import * as React from 'react';
import { Todo } from '../models/todo';
import TodoCard from './TodoCard';

export interface IListTodosProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function ListTodos (props: IListTodosProps) {
  return (
    <div className='w-2/5'>
      { props.todos.map(todo => <TodoCard key={ todo.id } todo={ todo } setTodos={ props.setTodos } />) }
    </div>
  );
}
