import React, { useState, useEffect } from 'react';

export const withLogic = WrappedComponent => props => {

    const [newTask, setNewTask] = useState(null);
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        if (!tasks) {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            setTasks(tasks);
        } else {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks]);

    const addTask = event => {
        event.preventDefault();
        const updatedTasks = [...tasks];
        updatedTasks.push(newTask);
        setTasks(updatedTasks);
        setNewTask(null);
    };

    return <WrappedComponent
        tasks={tasks}
        newTask={newTask}
        addTask={addTask}
        setNewTask={setNewTask}
        {...props} />;
};