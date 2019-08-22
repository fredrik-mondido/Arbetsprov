import React from 'react';

function WithOverlayStyling(Component) {

    return function ComponentWithStyledDiv(props) {
    
        return (
            <div className="overlay-container">
                <Component {...props} />
            </div>
        )
    }
}

export default WithOverlayStyling;