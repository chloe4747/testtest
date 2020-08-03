import React from 'react'
import store from '../store'

function LoginPage() {
    return (
        <div>
            <h1>login page</h1>
            <button onClick={() => {
                store.dispatch({ type: "LOGIN", name: "둘리", age: 333 })
            }}>login2</button>
        </div>
    )
}

export default LoginPage