import React from 'react';

const Button = ({ clickHandler, children, className }) => {

    return (
        <button className={className} onClick={clickHandler}>{children}</button>
    )
}

export default Button;