import React from "react";

export default function Person() {
    return (
        <div>
            <h1>Hi I am a person</h1>
            <p>I am {Math.floor(Math.random() * 30)} years old</p>
        </div>
    )
}
