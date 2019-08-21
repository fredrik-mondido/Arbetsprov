import React from 'react';
import TodoForm from '../components/todo-form';
import List from '../components/list';

const ActiveView = ({ todos, addTodoSubmitHandler }) => {
    
    return (
        <div>
            <TodoForm title="Create Todo" submitHandler={addTodoSubmitHandler} />
            <List todos={todos} column="created" />
            <List todos={todos} column="active" />
            <List todos={todos} column="completed" />
            <List todos={todos} column="onHold" />
        </div>
    )
}

export default ActiveView;