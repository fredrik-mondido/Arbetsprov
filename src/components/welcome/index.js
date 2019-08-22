import React from 'react';
import './welcome.css';

const Welcome = () => {
    return (
        <div className="welcome-container">
            <div className="text-container">
                <span className="text-effect">Welcome</span>
                <span className="postscript">to another todo app...</span>
            </div>
        </div>
    )
}

export default Welcome;