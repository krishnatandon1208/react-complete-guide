import React from "react";

export default function Person(props) {
    return (
        <div>
            <div>
                <p>Name : {props.name}</p>
                <p>Company: {props.company}</p>
            </div>
            <p>Hobbies: {props.children}</p>
        </div>
    )
}
