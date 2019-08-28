import React from 'react';
import PropTypes from 'prop-types';
import { Enums, TASK_ACTION_HANDLERS } from '../constants';

export const TaskListItem = props => {

    const { displayConfirmationDialog, task } = props;

    const taskActions = {
        'Edit': Enums.TASK_ACTIONS.edit,
        'Delete': Enums.TASK_ACTIONS.delete
    };

    return <li className="list-group-item">
        <span className="col-sm-8">{task.title}</span>
        {
            task.complexity
                ? <span className="badge badge-danger">{task.complexity}</span>
                : null
        }
        <button
            className="close ml-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span aria-hidden="true">&Xi;</span>
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
                Object.keys(taskActions).map(action => <button
                    key={taskActions[action]}
                    onClick={() => props[TASK_ACTION_HANDLERS[taskActions[action]]](task.id)}
                    className="dropdown-item">
                    { action }
                </button>)
            }
        </div>
        <button type="button" className="close"
            onClick={() => displayConfirmationDialog(task.id)}>
            <span aria-hidden="true" className="delete-btn">&times;</span>
        </button>
    </li>
};

TaskListItem.propTypes = {
    displayConfirmationDialog: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
};