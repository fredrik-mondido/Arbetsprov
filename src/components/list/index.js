import React from 'react';
import TodoItem from '../todo-item';

const List = ({ todos, column }) => {
    return (
        <ol>
            {todos
                .filter(item => item.state === column)
                .map((item, i) => <li key={i}><TodoItem {...item} /></li>)
            }
        </ol>
    )
}

export default List;