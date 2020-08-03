import React from 'react'
import store from '../store'

function LoginButton() {
    return (
        <button onClick={() => {
            store.dispatch({ type: "LOGIN", name: "둘리", age: 333 })
        }}>로그인버튼</button>
    )
}

export default LoginButton