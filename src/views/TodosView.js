import React from 'react';
import List from '../components/list';
import formatTitle from '../utils/formatTitle';
import './todos-view.css';

const TodosView = ({ todos, editTodo, setEditTodo, update }) => {

    const columns = ['created', 'active', 'completed', 'onHold'];

    return (
        <div className="todos-view-container --slideInLeft">
            <div className="flex-row">
                {columns.map((name, i) =>
                    <List 
                        key={i}
                        todos={todos}
                        column={name}
                        title={formatTitle(name)}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                        updateTodo={update}
                    />
                )}
            </div>
        </div>
    )
}

export default TodosView;