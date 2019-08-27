import React from 'react'
import { Navbar } from '../navbar';
import { Enums } from '../constants';
import { TasksList } from '../tasksList/TasksList';

export default props => {
    const { addTask, setNewTask, newTask, tasks } = props

    return <div>
        <Navbar addTask={addTask} setNewTask={setNewTask} newTask={newTask} />
        {
            tasks ? Object.keys(Enums.TASK_STATUS).map((status, index) => <TasksList
                key={index} tasks={tasks.filter(task => task.status === Enums.TASK_STATUS[status])} />
            ) : null
        }
    </div>
};
