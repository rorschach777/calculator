import React from 'react';
import './ActionButton.css';
const ActionButtonType = (checkType) =>{
 return checkType === '=' 
}
const ActionButton =(props)=>{
return (
    <div 
    onClick={props.action} className={`action-button ${ActionButtonType(props.children)  ? 'eq' : 'ac'}`}>{props.children}
    </div>
);

};
export default ActionButton;