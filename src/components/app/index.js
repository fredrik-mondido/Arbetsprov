import React from 'react';
import WithTodoUtils from '../../hocs';
import TodosView from '../../views/TodosView';
import EditTodoView from '../../views/EditTodoView';
import AddTodoView from '../../views/AddTodoView';
import NavBar from '../nav-bar';

const App = props => {

    const { editTodo, addTodo, toggleAddTodo } = props;

    return (
        <div>
            <NavBar toggleAddTodo={toggleAddTodo} />
            {addTodo ? <AddTodoView {...props}/> : <></>}
            {editTodo ? <EditTodoView {...props} {...editTodo}/> : <></>}
            <TodosView {...props}/>
        </div>
    )
}

export default WithTodoUtils(App);