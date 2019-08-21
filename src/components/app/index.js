import React from 'react';
import WithTodoUtils from '../../hocs';
import ActiveView from '../../views/ActiveView';

const App = props => {
    return <ActiveView {...props} />
}

export default WithTodoUtils(App);