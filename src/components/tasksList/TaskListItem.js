import React from 'react';
import PropTypes from 'prop-types';
import { ActionsDropDown } from './ActionsDropDown';

export const TaskListItem = props => {

    const {
        displayConfirmationDialog, task, displayEditTaskModal,
        taskNextStatus, changeStatus
    } = props;

    return <li className="list-group-item">
        <button className="btn btn-link" onClick={() => displayEditTaskModal(task.id)}>{ task.title }</button>
        {
            task.complexity
                ? <span className="badge badge-info">{task.complexity}</span>
                : null
        }
        <button
            className="close ml-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <span aria-hidden="true">⁝</span>
        </button>
        <ActionsDropDown
            task={task}
            displayEditTaskModal={displayEditTaskModal}
            taskNextStatus={taskNextStatus}
            changeStatus={changeStatus} />
        <button type="button" className="close"
            onClick={() => displayConfirmationDialog(task.id)}>
            <span aria-hidden="true" className="delete-btn">&times;</span>
        </button>
    </li>
};

TaskListItem.propTypes = {
    displayConfirmationDialog: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    displayEditTaskModal: PropTypes.func.isRequired,
    taskNextStatus: PropTypes.array.isRequired,
    changeStatus: PropTypes.func.isRequired
};