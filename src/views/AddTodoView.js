import React from 'react';
import TodoForm from '../components/todo-form';

const AddTodoView = ({ addTodoSubmitHandler }) => <TodoForm title="Add Todo" submitHandler={addTodoSubmitHandler} />

export default AddTodoView;