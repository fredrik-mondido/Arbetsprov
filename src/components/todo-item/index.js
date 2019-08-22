import React from 'react';
import './todo-item.css';
import TodoButtons from '../todo-buttons';

const TodoItem = props => {

    const { title, description, complexity, assignedTo } = props;

    return (
        <div className="todoItem">
            <div className="todo-content-container">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <p className="detail">Complexity: {complexity}</p>
                <p className="detail">Assigned to: {assignedTo || 'No one'}</p>
            </div>
            <TodoButtons {...props} />
        </div>
    )
}

export default TodoItem;