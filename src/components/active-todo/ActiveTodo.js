import React from 'react';
import './active-todo.css';

const ActiveTodo = props => {

    const { id, title, description, complexity, assignedTo, clearActiveTodo, editTodoSubmitHandler } = props;

    return (
        <div className="active-todo">
            <form onSubmit={editTodoSubmitHandler}>
                <label htmlFor="title">Title: <input className="active-todo__title" id="title" name="title" type="text" defaultValue={title}/></label>
                <label htmlFor="description">Description: <textarea className="active-todo__description" id="description" name="description" defaultValue={description}></textarea></label>
                <label htmlFor="complexity">Complexity: <input className="active-todo__detail" id="complexity" name="complexity" type="number" defaultValue={complexity}/></label>
                <label htmlFor="assigned">Assigned to: <input className="active-todo__detail" type="text" id="assignedTo" name="assignedTo"/>{assignedTo || ''}</label>
                <input type="submit" className="secondary" value="Update"/>
                <input type="hidden" id="id" name="id" value={id}/>
                <button onClick={() => clearActiveTodo()}>Cancel</button>
            </form>
        </div>
    )
};

export default ActiveTodo;