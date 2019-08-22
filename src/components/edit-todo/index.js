import React from 'react';
import './edit-todo.css';

const EditTodo = props => {

    const { id, title, description, complexity, assignedTo, clearEditTodo, editTodoSubmitHandler } = props;

    return (
        <div className="overlay-box-container edit-todo-container">
            <form className="form-container" onSubmit={editTodoSubmitHandler} autoComplete="off">
                <div className="form-row">
                    <label htmlFor="title">Title: <input className="edit-todo__title" id="title" name="title" type="text" defaultValue={title} /></label>
                </div>
                <div className="form-row">
                    <label htmlFor="description">Description: <textarea className="edit-todo__description" id="description" name="description" defaultValue={description}></textarea></label>
                </div>
                <div className="form-row">
                    <label htmlFor="complexity">Complexity: <input className="edit-todo__detail" id="complexity" name="complexity" type="number" defaultValue={complexity} /></label>
                </div>
                <div className="form-row">
                    <label htmlFor="assigned">Assigned to: <input className="edit-todo__detail" type="text" id="assignedTo" name="assignedTo" />{assignedTo || ''}</label>
                </div>
                <input type="submit" className="secondary" value="Update" />
                <input type="hidden" id="id" name="id" value={id} />
                <button onClick={() => clearEditTodo()}>Cancel</button>
            </form>
        </div>
    )
};

export default EditTodo;