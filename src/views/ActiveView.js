import React from 'react';
import TodoForm from '../components/todo-form';
import List from '../components/list';

const ActiveView = ({ todos, addTodoSubmitHandler }) => {

    return (
        <div>
            <TodoForm title="Create Todo" submitHandler={addTodoSubmitHandler} />
            <div className="list-container">
                <List todos={todos} column="created" title="Created" />
                <List todos={todos} column="active" title="Active" />
                <List todos={todos} column="completed" title="Completed" />
                <List todos={todos} column="onHold" title="On hold" />
            </div>
        </div>
    )
}

export default ActiveView;