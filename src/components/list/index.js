import React from 'react';
import TodoItem from '../todo-item';
import './list.css';

const List = ({ todos, column, title, editTodo, setEditTodo, updateTodo, deleteTodo }) => {
    return (
        <div className="list-container">
            <h3 className="list__title">{title}</h3>
            <ol className="list">
                {todos.length === 0 && column === 'created'
                    ? <p className="placeholder-message">You haven't created any todos yet!</p>
                    : todos
                        .filter(item => item.state === column)
                        .map((item, i) =>
                            <li key={i}>
                                <TodoItem {...item}
                                    editTodo={editTodo}
                                    setEditTodo={setEditTodo}
                                    updateTodo={updateTodo}
                                    deleteTodo={deleteTodo}
                                />
                            </li>)
                }
            </ol>
        </div>
    )
}

export default List;