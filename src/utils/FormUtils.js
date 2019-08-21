export const addTodoSubmitHandler = (e, callback) => {
    e.preventDefault();

    const newTodo = {
        title: e.target.title.value,
        description: e.target.description.value,
        complexity: e.target.complexity.value,
        state: 'created',
        assignedTo: null
    }

    callback(newTodo);
}

export const editTodoSubmitHandler = (e, callback) => {
    e.preventDefault();

    const newTodo = {
        title: e.target.title.value,
        description: e.target.description.value,
        complexity: e.target.complexity.value,
        state: 'created',
        assignedTo: null
    }

    callback(newTodo);
}

export default addTodoSubmitHandler;