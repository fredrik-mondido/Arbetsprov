import React from 'react';
import './todo-buttons.css';
import Button from '../button';

const TodoButtons = ({ id, state, assignedTo, setEditTodo, updateTodo, deleteTodo }) => {

    return (
        <div className="button-container">
            {state !== 'archived' && state !== 'onHold'
                ? <Button className="button__todo --edit" clickHandler={() => setEditTodo(id)}>Edit me</Button>
                : <></>}
            {state === 'created' && assignedTo
                ? <Button className="button__todo --state" clickHandler={() => updateTodo({ id, state: 'active' })}>Activate</Button>
                : <></>}
            {state === 'active'
                ? <Button className="button__todo --state" clickHandler={() => updateTodo({ id, state: 'completed' })}>Completed</Button>
                : <></>}
            {state === 'completed'
                ? <Button className="button__todo --state" clickHandler={() => updateTodo({ id, state: 'archived' })}>Archive</Button>
                : <></>}
            {state === 'archived'
                ? <Button className="button__todo --delete" clickHandler={() => deleteTodo(id)}>Delete permanently</Button>
                : <></>}
            {state === 'onHold'
                ? <>
                    <Button className="button__todo --state" clickHandler={() => updateTodo({ id, state: 'active' })}>Active</Button>
                    <Button className="button__todo --state" clickHandler={() => updateTodo({ id, state: 'archived' })}>Archive</Button>
                </>
                : <></>}
        </div>
    )
}

export default TodoButtons;