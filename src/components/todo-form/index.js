import React from 'react';

const TodoForm = ({ title, submitHandler }) => {

    return (
        <div className="todoForm">
            <h2 className="todoForm__title">{title}</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title: </label><input id="title" name="title" type="text" required />
                <label htmlFor="description">Description: </label><textarea id="description" name="description" />
                <label htmlFor="complexity">Complexity: </label><input id="complexity" name="complexity" type="number" min="0" max="10" step="1" defaultValue="5" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default TodoForm;