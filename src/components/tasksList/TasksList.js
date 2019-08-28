import React from 'react';
import PropTypes from 'prop-types';
import { TaskListItem } from './TaskListItem';
import { TASK_NEXT_STATUS, Enums } from '../constants';

export const TasksList = React.memo(props => {

    const {
        tasks, displayConfirmationDialog,
        displayEditTaskModal, status, changeStatus
    } = props;

    let taskNextStatus = status in TASK_NEXT_STATUS
        ? TASK_NEXT_STATUS[status]
        : Object.keys(Enums.TASK_STATUS).map(key =>
            Enums.TASK_STATUS[key]).filter(taskStatus => taskStatus !== status);

    return <ul className="list-group">
        {
            tasks.map((task, index) => <TaskListItem
                displayConfirmationDialog={displayConfirmationDialog}
                displayEditTaskModal={displayEditTaskModal}
                task={task}
                key={index}
                changeStatus={changeStatus}
                taskNextStatus={taskNextStatus} />
            )
        }
    </ul>
});

TasksList.propTypes = {
    tasks: PropTypes.array.isRequired,
    displayConfirmationDialog: PropTypes.func.isRequired,
    displayEditTaskModal: PropTypes.func.isRequired,
    status: PropTypes.number.isRequired,
    changeStatus: PropTypes.func.isRequired
};