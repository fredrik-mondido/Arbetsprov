import React from 'react';
import TodoForm from '../components/todo-form';
import WithOverlayStyling from '../hocs/WithOverlayStyling';

const AddTodoView = ({ addTodoSubmitHandler }) => <TodoForm title="Add Todo" submitHandler={addTodoSubmitHandler} />

export default WithOverlayStyling(AddTodoView);