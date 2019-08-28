import React, { useState, useEffect } from 'react';

export const withLogic = WrappedComponent => props => {

    const [newTask, setNewTask] = useState(null);
    const [tasks, setTasks] = useState(null);
    const [selectedTaskId, setSelectedTaskId] = useState(-1);
    const [showConfirmationDialog, setConfirmationDialogVisibility] = useState(false);
    const [showEditTaskModal, setEditTaskModalVisibility] = useState(false);

    useEffect(() => {
        if (!tasks) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            setTasks(tasks);
        } else {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const displayConfirmationDialog = taskId => {
        setConfirmationDialogVisibility(true);
        setSelectedTaskId(taskId);
    };

    const displayEditTaskModal = taskId => {
        setEditTaskModalVisibility(true);
        setSelectedTaskId(taskId);
        setNewTask({...tasks.find(task => task.id === taskId)});
    };

    const hideConfirmationDialog = () => setConfirmationDialogVisibility(false);

    const hideEditTaskModal = () => {
        setEditTaskModalVisibility(false);
        setNewTask(null);
    }

    const addTask = event => {
        event.preventDefault();

        const updatedTasks = [...tasks];
        updatedTasks.push(newTask);

        setTasks(updatedTasks);
        setNewTask(null);
    };

    const removeTask = event => {
        event.preventDefault();

        setTasks(tasks.filter(task => task.id !== selectedTaskId));
        hideConfirmationDialog();
    };

    const editTask = () => {
        const updatedTasks = [...tasks];
        const index = updatedTasks.findIndex(task => task.id === selectedTaskId);
        updatedTasks[index] = newTask;
        setTasks(updatedTasks);
        hideEditTaskModal();
    };

    return <WrappedComponent
        tasks={tasks}
        newTask={newTask}
        addTask={addTask}
        setNewTask={setNewTask}
        showConfirmationDialog={showConfirmationDialog}
        displayConfirmationDialog={displayConfirmationDialog}
        hideConfirmationDialog={hideConfirmationDialog}
        removeTask={removeTask}
        showEditTaskModal={showEditTaskModal}
        displayEditTaskModal={displayEditTaskModal}
        hideEditTaskModal={hideEditTaskModal}
        editTask={editTask}
        {...props} />;
};