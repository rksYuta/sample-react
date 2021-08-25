import React, { useState } from 'react';
const App=()=>{
  return(
    <div>
      <h1>React Todo List</h1>
      <Todo/>
    </div>
  )
}

const Todo=()=>{
  const todolist=[]
  const [todo,setTodo]=useState(todolist)
  const [task,setTask]=useState('')


  const addTodo=(e)=>{
    setTask(e.target.value)
  }
  const Submit=()=>{
    if(task === ''){
      return
    }else{
      setTodo(todo => [...todo, {task}])
      setTask('')
    }
  }

const deleteTodo=(index)=>{
  const newTodo=[...todo]
  newTodo.splice(index,1)
  setTodo(newTodo)
}
  return(
    <div>
      <input type="text" value={task} onChange={addTodo}></input>
      <button type="button" onClick={Submit}>add</button>
      <div>
        {todo.map((val, index)=>(
          <div key={index}>{val.task}<button onClick={deleteTodo}>delete</button></div>
        ))}
      </div>
    </div>
  )
}

export default App;