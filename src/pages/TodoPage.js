import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'

const TodoPage = () => {
    const [todos, setTodos] = useState([])
    const [InputTodo, setInputTodo] = useState("")


    return (
        <div>
            <NavBar/>
            <div className="input">
                <input placeholder="write your things to do!sss" value={InputTodo} onChange={(e)=>{setInputTodo(e.currentTarget.value)}}/>
                <button onClick={()=>{
                    axios.get('/todos').then((r)=>{
                        const todos = r.data.todos
                        console.log(todos)
                        setTodos(todos)
                    })
                }}>renew</button>
            </div>
            <div>
                {todos.map((todo, i) => {
                    return (<div key={i}>{todo.name}</div>)
                })}
            </div>
        </div>
    )
}

export default TodoPage