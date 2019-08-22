import React from 'react';
import AddTodo from '../components/add-todo';
import WithOverlayStyling from '../hocs/WithOverlayStyling';

const AddTodoView = ({ addTodoSubmitHandler, toggleAddTodo }) => <AddTodo title="Add Todo's" submitHandler={addTodoSubmitHandler} toggleAddTodo={toggleAddTodo} />

export default WithOverlayStyling(AddTodoView);