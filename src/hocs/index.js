import React, { useState } from 'react';
import { add, getOne, deleteOne, changeState, assign, update } from '../utils/TodoUtils';
import submitHandler from '../utils/FormUtils';

function WithApplicationlogic(Component) {
    
    return function AddState (...props) {

        const [todos, setTodos] = useState([]);
        props['todos'] = todos;
        props['getOne'] = id => getOne(todos, id);
        props['deleteOne'] = id => setTodos(deleteOne(todos, id));
        props['add'] = newTodo => setTodos(add(todos, newTodo));
        props['changeState'] = (id, newState) => setTodos(changeState(todos, id, newState));
        props['assign'] = (id, assignee) => setTodos(assign(todos, id, assignee));
        props['update'] = (id, property, content) => setTodos(update(todos, id, property, content));
        
        const [activeTodo, setActiveTodo] = useState(null);
        props['editTodo'] = activeTodo;
        props['clearEditTodo'] = () => setActiveTodo(null);
        props['setEditTodo'] = id => setActiveTodo(getOne(todos, id));
        
        props['addTodoSubmitHandler'] = e => submitHandler(e, newTodo => setTodos(add(todos, newTodo)));
        props['editTodoSubmitHandler'] = e => submitHandler(e, updatedTodo => {
            setTodos(update(todos, updatedTodo));
            setActiveTodo(null);
        });

        const [addTodo, setAddTodo] = useState(false);
        props['addTodo'] = addTodo;
        props['toggleAddTodo'] = () => setAddTodo(!addTodo);
        
        return <Component {...props} />
    }
}

export default WithApplicationlogic;