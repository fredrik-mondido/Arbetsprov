import React from 'react';
import Button from '../button';

const NavBar = ({ toggleAddTodo, toggleShowArchive }) => {
    return (
        <nav>
            <Button clickHandler={toggleAddTodo}>Add todo</Button>
            <Button clickHandler={toggleShowArchive}>Show archive</Button>
        </nav>
    )
}

export default NavBar;