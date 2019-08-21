import React from 'react';
import WithTodoUtils from '../../hocs';
import TodosView from '../../views/TodosView';
import ActiveTodoView from '../active-todo/ActiveTodo';

const App = props => {

    const { activeTodo } = props;

    return activeTodo 
        ? <ActiveTodoView {...props} {...activeTodo}/>
        : <TodosView {...props}/>
}

export default WithTodoUtils(App);