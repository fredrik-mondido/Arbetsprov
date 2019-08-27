import React from 'react';

export const TasksList = React.memo(({ tasks }) => <div className="col-sm">
    <ul class="list-group">
        { tasks.map(task => <li class="list-group-item">{ task.title }</li>) }
    </ul>
</div>);
