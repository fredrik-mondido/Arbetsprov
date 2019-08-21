import React from 'react';
import List from '../list';
import TodoForm from '../todo-form';

const App = () => {
    return (
        <div>
            <TodoForm title="Create Todo" />
            <List />
        </div>
    )
}

export default App