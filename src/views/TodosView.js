import React from 'react';
import TodoForm from '../components/todo-form';
import List from '../components/list';

const TodosView = ({ todos, addTodoSubmitHandler, setActiveTodo }) => {

    const columns = ['created', 'active', 'completed', 'onHold'];
    const formatTitle = name => {
        const capitalchar = name.match(/[A-Z]/);
        const firstChar = name.charAt(0).toUpperCase();
        name = capitalchar ? name.replace(capitalchar, ` ${capitalchar}`) : name;
        return firstChar + name.slice(1);
    }

    return (
        <div>
            <TodoForm title="Create Todo" submitHandler={addTodoSubmitHandler} />
            <div className="list-container">
                {columns.map((name, i) =>
                    <List key={i}
                        todos={todos}
                        column={name}
                        title={formatTitle(name)}
                        setActiveTodo={setActiveTodo}
                    />
                )}
            </div>
        </div>
    )
}

export default TodosView;