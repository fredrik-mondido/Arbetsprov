import React from 'react';
import TodoForm from '../components/todo-form';
import WithOverlayStyling from '../hocs/WithOverlayStyling';

const AddTodoView = ({ addTodoSubmitHandler, toggleAddTodo }) => <TodoForm title="Add Todo's" submitHandler={addTodoSubmitHandler} toggleAddTodo={toggleAddTodo} />

export default WithOverlayStyling(AddTodoView);