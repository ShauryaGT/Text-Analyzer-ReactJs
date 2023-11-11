import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

let def = -1;
export default function Alert(props) {
    // if (def == -1){
    //     def = 0;
    //     setTimeout(() => {
    //         def = -1;
    //     }, 3000);        
    // }${def == -1 ? "invisible" : ""}
    return (
        <div id="alertbanner" className={`allert`}>
            {props.message != null &&
            props.message.map(element => {
                return <div key={element.id} className={`alert alert-success d-flex align-items-center ${(props.message.indexOf(element) == 0) ? "newaddition" : ""}`} role="alert" style={{width : '500px'}}><div>{element.message}</div></div>
            })}
        </div>
    );
}