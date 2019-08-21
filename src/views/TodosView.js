import React from 'react';
import TodoForm from '../components/todo-form';
import List from '../components/list';

const TodosView = ({ todos, addTodoSubmitHandler, setActiveTodo }) => {

    return (
        <div>
            <TodoForm title="Create Todo" submitHandler={addTodoSubmitHandler} />
            <div className="list-container">
                <List todos={todos} column="created" title="Created" setActiveTodo={setActiveTodo} />
                <List todos={todos} column="active" title="Active" setActiveTodo={setActiveTodo} />
                <List todos={todos} column="completed" title="Completed" setActiveTodo={setActiveTodo} />
                <List todos={todos} column="onHold" title="On hold" setActiveTodo={setActiveTodo} />
            </div>
        </div>
    )
}

export default TodosView;