import React from 'react';
import List from '../components/list';
import './archive-view.css';

const ArchivedTodosView = props => {

    const { todos } = props;

    return (
        <div className="todos-view-container archive-container --slideInLeft">
            <List
                todos={todos}
                column="archived"
                title="Archived"
                {...props}
            />
        </div>
    )
}


export default ArchivedTodosView;