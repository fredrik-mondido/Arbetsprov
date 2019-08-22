import React from 'react';
import './nav-bar.css';
import Button from '../button';

const NavBar = ({ toggleAddTodo, toggleShowArchive }) => {
    return (
        <nav>
            <Button className="nav-button --green" clickHandler={toggleAddTodo}>Add todo</Button>
            <Button className="nav-button --red" clickHandler={toggleShowArchive}>Show archive</Button>
        </nav>
    )
}

export default NavBar;