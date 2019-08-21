import React from 'react';
import './active-todo.css';

const ActiveTodo = props => {

    const { title, description, complexity, assignedTo, setActiveTodo } = props;

    return (
        <div className="active-todo">
            <input className="active-todo__title" type="text" defaultValue={title} />
            <textarea className="active-todo__description">{description}</textarea>
            <p className="active-todo__detail">Complexity: {complexity}</p>
            <p className="active-todo__detail">Assigned to: {assignedTo || 'No one'}</p>
            <button className="secondary" onClick={() => setActiveTodo(null)}>Done</button>
        </div>
    )
};

export default ActiveTodo;