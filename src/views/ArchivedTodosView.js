import React from 'react';
import List from '../components/list';
import './archive-view.css';

const ArchivedTodosView = ({ todos }) =>
    <div className="archive-container">
        <List
            todos={todos}
            column="archived"
            title="Archived"
        />
    </div>

export default ArchivedTodosView;