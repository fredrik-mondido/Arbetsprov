import React from 'react';

const TodoItem = ({ title, description, complexity }) =>
    <div>
        <h3>{title || 'title'}</h3>
        <p>{description || 'description'}</p>
        <p>{complexity || 'complexity'}</p>
    </div>

export default TodoItem;