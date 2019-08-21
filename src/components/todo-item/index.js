import React from 'react';

const TodoItem = ({ title, description, complexity, assignedTo }) =>
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Complexity: {complexity}</p>
        <p>Assigned to: {assignedTo || 'No one'}</p>
    </div>

export default TodoItem;