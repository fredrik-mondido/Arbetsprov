import React from 'react';
import PropTypes from 'prop-types';
import { TaskListItem } from './TaskListItem';

export const TasksList = React.memo(({ tasks,
    displayConfirmationDialog, displayEditTaskModal }) => <ul className="list-group">
        {
            tasks.map((task, index) => <TaskListItem
                displayConfirmationDialog={displayConfirmationDialog}
                displayEditTaskModal={displayEditTaskModal}
                task={task}
                key={index} />
            )
        }
    </ul>
);

TasksList.propTypes = {
    tasks: PropTypes.array.isRequired,
    displayConfirmationDialog: PropTypes.func.isRequired,
    displayEditTaskModal: PropTypes.func.isRequired
};