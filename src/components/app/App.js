import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from '../navbar';
import { PromptMessages } from '../constants';
import { ConfirmationDialog } from '../common';
import { EditTaskModal } from '../editTaskModal';
import { DisplayScreen } from '../displayScreen';

export const App = props => {

    const {
        addTask, setNewTask, newTask, tasks, removeTask, showConfirmationDialog,
        displayConfirmationDialog, hideConfirmationDialog, showEditTaskModal,
        displayEditTaskModal, hideEditTaskModal, editTask, changeStatus,
        selectedScreen, setSelectedScreen
    } = props;

    return <div>
        <Navbar
            addTask={addTask}
            setSelectedScreen={setSelectedScreen}
            setNewTask={setNewTask}
            newTask={newTask} />
        <DisplayScreen
            displayConfirmationDialog={displayConfirmationDialog}
            displayEditTaskModal={displayEditTaskModal}
            selectedScreen={selectedScreen}
            tasks={tasks}
            changeStatus={changeStatus} />
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
    changeStatus: PropTypes.func.isRequired,
    selectedScreen: PropTypes.number.isRequired,
    setSelectedScreen: PropTypes.func.isRequired
};