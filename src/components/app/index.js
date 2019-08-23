import React, { useEffect } from 'react';
import WithTodoUtils from '../../hocs';
import TodosView from '../../views/TodosView';
import EditTodoView from '../../views/EditTodoView';
import AddTodoView from '../../views/AddTodoView';
import ArchivedTodosView from '../../views/ArchivedTodosView';
import NavBar from '../nav-bar';
import Button from '../button';
import Loader from '../loader';
import Welcome from '../welcome';

const App = props => {

    const { editTodo, addTodo, showArchive, todos, setTodos, sortList, loading, showLoader, welcome, showWelcome } = props;

    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem('items')));
    }, [setTodos])

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(todos));
    }, [todos])

    useEffect(() => {
        showLoader(2000);
    }, [setTodos])

    useEffect(() => {
        showWelcome();
    });


    return (
        <div>
            {welcome && !sessionStorage.getItem('active')
                ? <Welcome />
                : <></>
            }
            <NavBar {...props} />
            {loading
                ? <Loader />
                : (
                    <>
                        {showArchive
                            ? <ArchivedTodosView {...props} />
                            : (
                                <>
                                    {addTodo ? <AddTodoView {...props} /> : <></>}
                                    {editTodo ? <EditTodoView {...props} {...editTodo} /> : <></>}
                                    <TodosView {...props} />
                                </>
                            )}
                    </>
                )}
            <Button className="button-fixed" clickHandler={() => sortList()}>Toggle Sort</Button>
        </div>
    )
}

export default WithTodoUtils(App);