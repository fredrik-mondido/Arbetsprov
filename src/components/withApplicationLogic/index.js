import React, { useState } from 'react';

function withApplicationlogic(Component) {
    
    return function AddState (...props) {

        const [todos, setTodos] = useState([]);

        props['todos'] = todos;
        props['setTodos'] = setTodos;

        return (
            <div>
                <Component {...props} />
            </div>
        )
    }
}

export default withApplicationlogic;