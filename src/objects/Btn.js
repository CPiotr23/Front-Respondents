import React from 'react';
function Btn(props) {
    return (
        <button className={props.btnname} onClick={() => props.changePageButton(props.page)}> {props.name}</button>
    );
}

export default Btn;