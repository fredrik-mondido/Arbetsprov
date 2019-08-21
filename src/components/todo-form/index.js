import React from 'react';

const TodoForm = ({ title, submitHandler }) =>
    <div>
        <h2>{title}</h2>
        <form onSubmit={submitHandler}>
            <label for="title">Title: <input id="title" name="title" type="text" /></label>
            <label for="description">Description: <textarea id="description" name="description" /></label>
            <label for="complexity">Complexity: <input id="complexity" name="complexity" type="range" min="0" max="10" step="1" defaultValue="5" /></label>
        </form>
    </div>

export default TodoForm;