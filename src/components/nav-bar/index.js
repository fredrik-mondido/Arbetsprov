import React from 'react';
import './nav-bar.css';
import Button from '../button';

const NavBar = ({ toggleAddTodo, toggleShowArchive, showArchive, editTodo, addTodo }) => {

    const disableClick = addTodo || editTodo ? { pointerEvents: 'none' } : {};

    return (
        <div style={disableClick}>
            {
                showArchive
                    ? <nav>
                        <Button className="nav-button" clickHandler={toggleShowArchive}>Go back</Button>
                    </nav>
                    : <nav>
                        <Button className="nav-button --green" clickHandler={toggleAddTodo}>Add todo</Button>
                        <Button className="nav-button --red" clickHandler={toggleShowArchive}>To archive</Button>
                    </nav>
            }
        </div>
    )
}

export default NavBar;