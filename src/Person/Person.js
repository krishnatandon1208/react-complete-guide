import React from "react";

export default function Person(props) {
    return (
        <div>
            <div onClick={props.click}>
                <p>Name : {props.name}</p>
                <p>Company: {props.company}</p>
            </div>
            <p>Hobbies: {props.children}</p>
            <div>
                <label>Testing 2 way data binding</label>
                <input type="text" />
            </div>
        </div>
    )
}
