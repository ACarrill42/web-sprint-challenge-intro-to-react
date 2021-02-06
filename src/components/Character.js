// Write your Character component here
import React from 'react';


function Character(props) {
    console.log(props);
    return (
        <div className = 'Characters'>
            <h3>Name: {props.props.name}</h3> 
        </div>
    )
};

export default Character;