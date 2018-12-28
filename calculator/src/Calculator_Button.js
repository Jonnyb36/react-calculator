import React from 'react';

export const Calculator_Button = props => {
    return <button onClick={props.onClick} value={props.value}>
            {props.value}
        </button>
}  
