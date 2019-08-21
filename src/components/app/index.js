import React from 'react';
import WithTodoUtils from '../../hocs';
import ActiveView from '../../views/ActiveView';
import ActiveTodo from '../active-todo';

const App = props => {

    const { activeTodo, setActiveTodo } = props;

    return activeTodo 
        ? <ActiveTodo {...activeTodo} setActiveTodo={setActiveTodo} />
        : <ActiveView {...props} />
}

export default WithTodoUtils(App);