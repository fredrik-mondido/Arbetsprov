import React, { useState, useEffect } from 'react';

export const withLogic = WrappedComponent => props => {

    const [newTask, setNewTask] = useState(null);
    const [tasks, setTasks] = useState(null);
    const [showConfirmationDialog, setConfirmationDialogVisibility] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(-1);

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

    const hideConfirmationDialog = () => setConfirmationDialogVisibility(false);

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

    return <WrappedComponent
        tasks={tasks}
        newTask={newTask}
        addTask={addTask}
        setNewTask={setNewTask}
        showConfirmationDialog={showConfirmationDialog}
        displayConfirmationDialog={displayConfirmationDialog}
        hideConfirmationDialog={hideConfirmationDialog}
        removeTask={removeTask}
        {...props} />;
};