import React from 'react';
import './CalcButton.css';
const buttonType = (x) => {
    return;
}

const CalcButton = (props) => (<div
    className={`calc-button ${props.children == 0 ? 'zero' : null}`}
    onClick={() => props.insertValue(props.children)}>
    {props.children}
</div>);

export default CalcButton;