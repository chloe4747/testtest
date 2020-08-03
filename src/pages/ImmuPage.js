import React, { useState, useEffect } from 'react'

// const user = {
//     children: {
//         age : 3
//     }
// }

// const newUser = {
//     ...user,
// }

// user === newUser // 다르다...
// user.children === newUser.children // 다를까?
// 같음

const ImmuPage = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({
        name: "둘리",
        age : 20
    })

    useEffect(() => {
        setInterval(() => {
            console.log(user)
        }, 1000)
    }, [])

    console.log("렌더링")

    return (
        <div>
            <h1>immupage</h1>
            <div>{count}</div>
            <button onClick={() => {
                setCount(count + 1)
            }}>+</button>
            <button onClick={() => {
                setCount(0)
            }}>change count to 0</button>
            <button onClick={() => {
                user.name = "길동"
                user.age = 200
                setUser(user)
            }}>change(unsafe)</button>
            <button onClick={() => {
                const newUser = {}
                newUser.name = user.name = "길동"
                newUser.age = user.age = 200
                setUser(newUser)
            }}>change(safe)</button>            
            <button onClick={() => {
                setUser({
                    ...user,
                    age: user.age + 300
                })
            }}>change(beautiful)</button>                 
            <div>{user.name}</div>
            <div>{user.age}</div>
        </div>
    )
}

export default ImmuPage