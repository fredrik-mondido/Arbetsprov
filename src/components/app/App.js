import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../navbar';
import { Enums, PromptMessages } from '../constants';
import { TasksList } from '../tasksList';
import { ConfirmationDialog } from '../common';
import { EditTaskModal } from '../editTaskModal';

export const App = props => {

    const {
        addTask, setNewTask, newTask, tasks, removeTask, showConfirmationDialog,
        displayConfirmationDialog, hideConfirmationDialog, showEditTaskModal,
        displayEditTaskModal, hideEditTaskModal, editTask, changeStatus
    } = props;

    return <div>
        <Navbar addTask={addTask} setNewTask={setNewTask} newTask={newTask} />
        <div className="container-fluid">
            <div className="row fullscreen">
                {
                    tasks ? Object.keys(Enums.TASK_STATUS).map((status, index) => <div key={index} className="col-sm">
                        <h6 className="text-center text-capitalize">{ status }</h6>
                        <TasksList
                            changeStatus={changeStatus}
                            displayEditTaskModal={displayEditTaskModal}
                            status={Enums.TASK_STATUS[status]}
                            tasks={tasks.filter(task => task.status === Enums.TASK_STATUS[status])}
                            displayConfirmationDialog={displayConfirmationDialog}/>
                    </div>
                    ) : null
                }
            </div>
        </div>
        <ConfirmationDialog
            handleClose={hideConfirmationDialog}
            showModal={showConfirmationDialog}
            successCallback={removeTask}
            message={PromptMessages.DELETE_TASK_PROMPT} />
        <EditTaskModal
            task={newTask}
            setNewTask={setNewTask}
            editTask={editTask}
            showModal={showEditTaskModal}
            handleClose={hideEditTaskModal} />
    </div>
};

App.propTypes = {
    addTask: PropTypes.func.isRequired,
    setNewTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    showConfirmationDialog: PropTypes.bool.isRequired,
    displayConfirmationDialog: PropTypes.func.isRequired,
    hideConfirmationDialog: PropTypes.func.isRequired,
    showEditTaskModal: PropTypes.bool.isRequired,
    displayEditTaskModal: PropTypes.func.isRequired,
    hideEditTaskModal: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    newTask: PropTypes.object,
    tasks: PropTypes.array,
    changeStatus: PropTypes.func.isRequired
};