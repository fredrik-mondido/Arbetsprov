import React from 'react';
import './todo-item.css';
import TodoButtons from '../todo-buttons';
import complexityColor from '../../utils/complexityColor';

const TodoItem = props => {

    const { title, description, complexity, assignedTo } = props;

    const color = complexityColor(complexity);

    return (
        <div className="todoItem">
            <div className="todo-content-container">
                <div className="top-row">
                    <h3 className="title">{title}</h3>
                    <p className="complexity">CI<span className={`complexity__index ${color}`}>{complexity}</span></p>
                </div>
                <p className="assigned-to">Assigned to: {assignedTo || 'No one'}</p>
                <p className="description">{description}</p>
            </div>
            <TodoButtons {...props} />
        </div>
    )
}

export default TodoItem;