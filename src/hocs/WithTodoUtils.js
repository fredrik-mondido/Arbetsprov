import React, { useState } from 'react';
import { add, getOne, deleteOne, changeState, assign, update } from '../utils/TodoUtils';
import submitHandler from '../utils/FormUtils';

export function WithTodoUtils(Component) {

    return function AddState(...props) {

        const [todos, setTodos] = useState([]);
        props['todos'] = todos;
        props['setTodos'] = setTodos;
        props['getOne'] = id => getOne(todos, id);
        props['deleteTodo'] = id => setTodos(deleteOne(todos, id));
        props['add'] = newTodo => setTodos(add(todos, newTodo));
        props['changeState'] = (id, newState) => setTodos(changeState(todos, id, newState));
        props['assign'] = (id, assignee) => setTodos(assign(todos, id, assignee));
        props['update'] = updatedTodo => setTodos(update(todos, updatedTodo));

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

        const [showTodoArchive, setShowTodoArchive] = useState(false);
        props['showArchive'] = showTodoArchive;
        props['toggleShowArchive'] = () => {
            showLoader(2000);
            setShowTodoArchive(!showTodoArchive);
        }

        const [toggleSort, setToggleSort] = useState(false);
        
        const sortList = () => {
            setToggleSort(!toggleSort);
            if (toggleSort) todos.sort((a, b) => a.complexity - b.complexity);
            else todos.sort((a, b) => b.complexity - a.complexity);
        }

        props['sortList'] = sortList;
        
        const [loading, setLoading] = useState(false);
        
        const showLoader = timeMs => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, timeMs);
        }
        
        props['loading'] = loading;
        props['showLoader'] = showLoader;
        
        const [welcome, setWelcome] = useState(false);
        
        const showWelcome = () => {
            setWelcome(true);
            setTimeout(() => {
                setWelcome(false);
            }, 9000);
        }
        
        props['welcome'] = welcome;
        props['showWelcome'] = showWelcome;

        return <Component {...props} />
    }
}

export default WithTodoUtils;