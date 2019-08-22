import React from 'react';
import Button from '../button';

const NavBar = ({ toggleAddTodo }) => {
    return (
        <Button clickHandler={toggleAddTodo}>Add todo</Button>
    )
}

export default NavBar;