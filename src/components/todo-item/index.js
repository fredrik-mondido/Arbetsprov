import React from 'react';
import './todo-item.css';

const TodoItem = props => {
    
    const { title, description, complexity, assignedTo, setActiveTodo } = props;
    
    return (
        <div className="todoItem">
            <h3 className="todoItem__title">{title}</h3>
            <p className="todoItem__description">{description}</p>
            <p className="todoItem__detail">Complexity: {complexity}</p>
            <p className="todoItem__detail">Assigned to: {assignedTo || 'No one'}</p>
            <button onClick={() => setActiveTodo(props.id)}>Edit me</button>
        </div>
    )
}

export default TodoItem;