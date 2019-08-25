import React from 'react';
import './add-todo.css';
import Button from '../button';

const AddTodo = ({ title, submitHandler, toggleAddTodo }) => {

    return (
        <div className="overlay-box-container add-todo-container">
            <h2 className="form-title">{title}</h2>
            <form className="form-container" onSubmit={submitHandler} autoComplete="off">
                <div className="form-row">
                    <label htmlFor="title">Title:</label>
                    <input id="title" name="title" type="text" required autoFocus />
                </div>
                <div className="form-row">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" />
                </div>
                <div className="form-row">
                    <label htmlFor="complexity">Complexity:</label>
                    <div className="complexity-container">
                        <p className="range-scale">0</p>
                        <input id="complexity" name="complexity" type="range" min="0" max="10" step="1" defaultValue="5" />
                        <p className="range-scale">10</p>
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="assignedTo">Assign to:</label>
                    <input id="assignedTo" name="assignedTo" type="text" />
                </div>
                <input className="button button--green" type="submit" value="Add" />
                <Button className="button" clickHandler={toggleAddTodo}>Done</Button>
            </form>
        </div>
    )
}

export default AddTodo;