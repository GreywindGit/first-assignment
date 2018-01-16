import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <input type="text" placeholder={props.username} onChange={props.change} />
        </div>
    )
}

export default userInput;