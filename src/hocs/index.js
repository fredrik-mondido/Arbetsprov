import React, { useState } from 'react';
import { add, getOne, deleteOne, changeState, assign, update } from '../utils/TodoUtils';

function WithApplicationlogic(Component) {
    
    return function AddState (...props) {

        const [todos, setTodos] = useState([]);

        props['getAll'] = () => todos;
        props['getOne'] = id => getOne(todos, id);
        props['deleteOne'] = id => setTodos(deleteOne(todos, id));
        props['add'] = newTodo => setTodos(add(todos, newTodo));
        props['changeState'] = (id, newState) => setTodos(changeState(todos, id, newState));
        props['assign'] = (id, assignee) => setTodos(assign(todos, id, assignee));
        props['update'] = (id, property, content) => setTodos(update(todos, id, property, content));

        return <Component {...props} />
    }
}

export default WithApplicationlogic;