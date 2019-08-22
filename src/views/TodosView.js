import React from 'react';
import List from '../components/list';
import formatTitle from '../utils/formatTitle';
import './todos-view.css';

const TodosView = props => {

    const { todos, editTodo, setEditTodo, update } = props;
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
                        {...props}
                    />
                )}
            </div>
        </div>
    )
}

export default TodosView;