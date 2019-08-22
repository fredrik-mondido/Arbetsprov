import React from 'react';
import './todo-item.css';
import TodoButtons from '../todo-buttons';
import complexityColor from '../../utils/complexityColor';

const TodoItem = props => {

    const { id, title, description, complexity, assignedTo, updateTodo } = props;

    const color = complexityColor(complexity);

    return (
        <div className="todoItem">
            <div className="todo-content-container">
                <div className="top-row">
                    <h3 className="title">{title}</h3>
                    <p className="complexity">CI<span className={`complexity__index ${color}`}>{complexity}</span></p>
                </div>
                <div className="bottom-row">
                    <p className="assigned-to">Assigned to: {assignedTo || 'No one'}</p>
                    <button onClick={() => updateTodo({ id, state: 'onHold' })} className="button__on-hold">On hold</button>
                </div>
                <p className="description">{description}</p>
            </div>
            <TodoButtons {...props} />
        </div>
    )
}

export default TodoItem;