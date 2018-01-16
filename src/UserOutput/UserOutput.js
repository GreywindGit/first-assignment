import React from 'react';

const userOutput = (props) => {
    const style = {
        fontWeight: "bold",
        color: "blueviolet"
    };

    return (
        <div>
            <p>Long time ago, in a galaxy far-far away...</p>
            <p onClick={props.click}>... there was a hero, called <span style={style}>{props.username}</span>.</p>
        </div>
    )
}

export default userOutput;