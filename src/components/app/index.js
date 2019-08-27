import React from 'react'
import { Navbar } from '../navbar';
import { Enums, PromptMessages } from '../constants';
import { TasksList } from '../tasksList/TasksList';
import { ConfirmationDialog } from '../common/ConfirmationDialog';

export default props => {
    const { 
        addTask, setNewTask, newTask, tasks, removeTask, showConfirmationDialog,
        displayConfirmationDialog, hideConfirmationDialog
    } = props

    return <div>
        <Navbar addTask={addTask} setNewTask={setNewTask} newTask={newTask} />
        <div className="container-fluid">
            <div className="row fullscreen">
                {
                    tasks ? Object.keys(Enums.TASK_STATUS).map((status, index) => <div key={index} className="col-sm">
                        <TasksList
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
    </div>
};
