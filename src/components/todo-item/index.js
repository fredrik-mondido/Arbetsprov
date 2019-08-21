import React from 'react';
import './todo-item.css';

const TodoItem = ({ title, description, complexity, assignedTo }) =>
    <div className="todoItem">
        <h3 className="todoItem__title">{title}</h3>
        <p className="todoItem__description">{description}</p>
        <p className="todoItem__detail">Complexity: {complexity}</p>
        <p className="todoItem__detail">Assigned to: {assignedTo || 'No one'}</p>
    </div>

export default TodoItem;