import React from "react";

export default function Person(props) {
    return (
        <div>
            {/* <h1>People in react learning group</h1> */}
            <div>
                <p>Name : {props.name}</p>
                <p>Company: {props.company}</p>
            </div>
            <p>{props.children}</p>
        </div>
    )
}
