import React from 'react'

function Home({ history }) {
    return (
        <div>
            <button onClick={() => history.goBack()}>Go Back</button>
            <button onClick={() => history.goForward()}>Go Forward</button>
            <h1>Hello From Home!!</h1>
        </div>
    )
}

export default Home