import React from 'react';
import './edit-todo.css';
import Button from '../button';

const EditTodo = props => {

    const { id, title, description, complexity, assignedTo, clearEditTodo, editTodoSubmitHandler, formTitle } = props;

    return (
        <div className="overlay-box-container edit-todo-container">
            <h2 className="form-title">{formTitle}</h2>
            <form className="form-container" onSubmit={editTodoSubmitHandler} autoComplete="off">
                <div className="form-row">
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" type="text" defaultValue={title} autoFocus />
                </div>
                <div className="form-row">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" defaultValue={description}></textarea>
                </div>
                <div className="form-row">
                    <label htmlFor="complexity">Complexity:</label>
                    <p className="range-scale">0</p>
                    <input id="complexity" name="complexity" type="range" min="0" max="10" step="1" defaultValue={complexity} />
                    <p className="range-scale">10</p>
                </div>
                <div className="form-row">
                    <label htmlFor="assigned">Assigned to:</label>
                    <input type="text" id="assignedTo" name="assignedTo" />{assignedTo || ''}
                </div>
                <input type="hidden" id="id" name="id" value={id} />
                <input type="submit" className="button button--black" value="Update" />
                <Button className="button" clickHandler={clearEditTodo}>Cancel</Button>
            </form>
        </div>
    )
};

export default EditTodo;