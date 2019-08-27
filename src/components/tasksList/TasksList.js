import React from 'react';

export const TasksList = React.memo(({ tasks, displayConfirmationDialog }) => <ul className="list-group">
    {
        tasks.map((task, index) => <li key={index} className="list-group-item">
            <span className="col-sm-8">{ task.title }</span>
            { 
                task.complexity
                    ? <span className="badge badge-danger">{ task.complexity }</span>
                    : null
            }
            <button type="button" className="close"
                onClick={() => displayConfirmationDialog(task.id)}>
                <span aria-hidden="true" className="delete-btn">&times;</span>
            </button>
        </li>)
    }
</ul>);
