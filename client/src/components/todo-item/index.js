import React from 'react';
import './todo-item.css';
import TodoButtons from '../todo-buttons';
import complexityColor from '../../utils/complexityColor';

const TodoItem = props => {

    const { id, title, description, complexity, assignedTo, updateTodo, state } = props;

    const color = complexityColor(complexity);

    return (
        <div className="todoItem">
            <div className="todo-content-container">
                <div className="card-row">
                    <h3 className="title">{title}</h3>
                    <div className="complexity-container">
                        <p className="complexity">CI<span className={`complexity__index ${color}`}>{complexity}</span></p>
                    </div>
                </div>
                <div className="card-row">
                    {
                        state.match(/active|completed/) ?
                            <button onClick={() => updateTodo({ id, state: 'onHold' })} className="button__on-hold">Put on hold</button>
                            : <></>
                    }
                    <p className="assigned-to">Assigned to: {assignedTo || 'No one'}</p>
                </div>
                <div className="card-row">
                    <p className="description">{description}</p>
                </div>
            </div>
            <TodoButtons {...props} />
        </div>
    )
}

export default TodoItem;