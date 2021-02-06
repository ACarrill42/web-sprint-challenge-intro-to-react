// Write your Character component here
import React from 'react';
import styled from 'styled-components';

// Color is from https://imperialstyleguide.com/#colors
const StyledDiv = styled.div `
    h3{
        background-color: #FFFFFF;
        color: #BC1E22;
        margin: 0 42%;
        border-radius: 10px;
    }
`;
const StyledP = styled.p `
    background-color: white;
    margin: 0 47%;
    border-radius: 10px;
    ${props => props.type === 'height' ? 'color: #394A59' : 'color: #556567'}
`;

function Character(props) {
    console.log(props);
    return (
        <StyledDiv className = 'container'>
            <h3>Name: {props.props.name}</h3> 
            <br></br>
            <StyledP type = 'height'>Height: {props.props.height}</StyledP>
            <br></br>
            <StyledP>Mass: {props.props.mass}</StyledP>
            <br></br>
        </StyledDiv>
    )
};

export default Character;