import React from 'react';
import TodoForm from '../components/todo-form';
import List from '../components/list';

const ActiveView = props => {
    
    console.log(props)

    return (
        <div>
            <TodoForm title="Create Todo" />
            <List />
        </div>
    )
}

export default ActiveView;