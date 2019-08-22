import React from 'react';
import TodoForm from '../todo-form';

const AddTodo = props => <TodoForm title="Add todo" submitHandler={props.addTodoSubmitHandler}/>;

export default AddTodo;