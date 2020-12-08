import React from "react";

export default function Person(props) {
    return (
        <div className="person-css">
            <div onClick={props.click}>
                <p>Name : {props.name}</p>
                <p>Company: {props.company}</p>
            </div>
            <div>
                <label>Testing 2 way data binding</label>
                <input 
                    type="text" 
                    onChange={props.changed} 
                    value={props.company}    
                />
            </div>
        </div>
    )
}
