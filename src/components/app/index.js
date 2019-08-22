import React, { useEffect } from 'react';
import WithTodoUtils from '../../hocs';
import TodosView from '../../views/TodosView';
import EditTodoView from '../../views/EditTodoView';
import AddTodoView from '../../views/AddTodoView';
import ArchivedTodosView from '../../views/ArchivedTodosView';
import NavBar from '../nav-bar';

const App = props => {

    const { editTodo, addTodo, showArchive, todos, setTodos } = props;

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('items')));
    }, [setTodos])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(todos));
    }, [todos])

    return (
        <div>
            <NavBar {...props} />
            {showArchive
                ? <ArchivedTodosView {...props} />
                : (
                    <>
                        {addTodo ? <AddTodoView {...props} /> : <></>}
                        {editTodo ? <EditTodoView {...props} {...editTodo} /> : <></>}
                        <TodosView {...props} />
                    </>
                )}
        </div>
        )
    }
    
export default WithTodoUtils(App);