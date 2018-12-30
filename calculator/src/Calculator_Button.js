import React from 'react';

export const Calculator_Button = props => {
    return <button onClick={props.onClick} id={props.id} value={props.value} style={props.style}>
            {props.value}
        </button>
}  
