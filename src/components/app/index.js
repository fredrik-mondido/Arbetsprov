import React from 'react'
import { Navbar } from '../navbar';
import { Enums, PromptMessages } from '../constants';
import { TasksList } from '../tasksList/TasksList';
import { ConfirmationDialog } from '../common/ConfirmationDialog';
import { EditTaskModal } from '../editTaskModals/EditTaskModal';

export default props => {
    const {
        addTask, setNewTask, newTask, tasks, removeTask, showConfirmationDialog,
        displayConfirmationDialog, hideConfirmationDialog, showEditTaskModal,
        displayEditTaskModal, hideEditTaskModal, editTask
    } = props

    return <div>
        <Navbar addTask={addTask} setNewTask={setNewTask} newTask={newTask} />
        <div className="container-fluid">
            <div className="row fullscreen">
                {
                    tasks ? Object.keys(Enums.TASK_STATUS).map((status, index) => <div key={index} className="col-sm">
                        <TasksList
                            displayEditTaskModal={displayEditTaskModal}
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
