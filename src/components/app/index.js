import React from 'react';
import WithTodoUtils from '../../hocs';
import TodosView from '../../views/TodosView';
import EditTodoView from '../../views/EditTodoView';
import AddTodoView from '../../views/AddTodoView';
import ArchivedTodosView from '../../views/ArchivedTodosView';
import NavBar from '../nav-bar';

const App = props => {

    const { toggleAddTodo, toggleShowArchive, editTodo, addTodo, showArchive } = props;

    return (
        <div>
            <NavBar toggleAddTodo={toggleAddTodo} toggleShowArchive={toggleShowArchive} />
            {addTodo ? <AddTodoView {...props} /> : <></>}
            {editTodo ? <EditTodoView {...props} {...editTodo} /> : <></>}
            {showArchive ? <ArchivedTodosView {...props} /> : <></>}
            <TodosView {...props} />
        </div>
    )
}

export default WithTodoUtils(App);