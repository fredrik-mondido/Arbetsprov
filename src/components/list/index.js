import React from 'react';
import TodoItem from '../todo-item';
import './list.css';

const List = ({ todos, column, title }) => {
    return (
        <div className="list">
            <h3 className="list__title">{title}</h3>
            <ol>
                {todos
                    .filter(item => item.state === column)
                    .map((item, i) => <li key={i}><TodoItem {...item} /></li>)
                }
            </ol>
        </div>
    )
}

export default List;