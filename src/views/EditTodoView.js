import React from 'react';
import EditTodo from '../components/edit-todo';
import WithOverlayStyling from '../hocs/WithOverlayStyling';

const EditTodoView = props => {

    return <EditTodo {...props} />
}

export default WithOverlayStyling(EditTodoView);