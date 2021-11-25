import React from 'react'


export default function About({ history }) {
    return (
        <div>
            <button onClick={() => history.goBack()}>Go Back</button>
            <button onClick={() => history.goForward()}>Go Forward</button>
            <button onClick={() => history.replace("/Post")}>Replace To Post</button>
            <h1>About Page!!!!</h1>
        </div>
    )
}
