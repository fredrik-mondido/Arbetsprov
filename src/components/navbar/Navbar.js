import React from 'react';
import { Enums } from '../constants';
import { getUniqueId } from '../../utils';

export const Navbar = ({ addTask, setNewTask, newTask }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Navbar</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2"
                    placeholder="Add Task"
                    value={newTask ? newTask.title : ''}
                    onChange={event => setNewTask({
                        id: getUniqueId(),
                        title: event.target.value,
                        status: Enums.TASK_STATUS.created
                    })}
                    aria-label="Add Task" />
                <button className="btn btn-outline-secondary my-2 my-sm-0"
                    onClick={addTask}>
                    Add
                </button>
            </form>
        </nav>
    );
};