import React from 'react';
import List from '../components/list';
import formatTitle from '../utils/formatTitle';

const TodosView = ({ todos, editTodo, setEditTodo }) => {

    const columns = ['created', 'active', 'completed', 'onHold'];

    return (
        <div>
            <div className="list-container">
                {columns.map((name, i) =>
                    <List 
                        key={i}
                        todos={todos}
                        column={name}
                        title={formatTitle(name)}
                        editTodo={editTodo}
                        setEditTodo={setEditTodo}
                    />
                )}
            </div>
        </div>
    )
}

export default TodosView;