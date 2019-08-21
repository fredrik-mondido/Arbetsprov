import React, { useState } from 'react';
import { add, getOne, deleteOne, changeState, assign, update } from '../utils/TodoUtils';

function WithApplicationlogic(Component) {
    
    return function AddState (...props) {

        const [todos, setTodos] = useState([]);

        props['getAll'] = () => todos;
        props['getOne'] = (todos, id) => getOne(todos, id);
        props['deleteOne'] = (todos, id) => setTodos(deleteOne(todos, id));
        props['add'] = (todos, newTodo) => setTodos(add(todos, newTodo));
        props['changeState'] = (todos, id, newState) => setTodos(changeState(todos, id, newState));
        props['assign'] = (todos, id, assignee) => setTodos(assign(todos, id, assignee));
        props['update'] = (todos, id, property, content) => setTodos(update(todos, id, property, content));

        return <Component {...props} />
    }
}

export default WithApplicationlogic;