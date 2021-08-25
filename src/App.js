
import React,{useState} from 'react';

const App=()=>{
return(
  <div>
    <Todo/>
  </div>
)
}
const Todo=()=>{
  const todolist =[
    {task: 'sample1'},
    {task: 'sample2'},
    {task: 'sample3'}
  ]
  const addNewTask =()=>{
    console.log('ok')
  }
  const [todos, setTodo]=useState(todolist)
  const [text,setText]=useState('')
  return(
    <div>
      <h1>React Todo sample</h1>
      <input></input>
      <button onClick={addNewTask}>add</button>
      <div>{todos.map((todo,index)=>(<div key={index}>{todo.task}</div>))}</div>
    </div>
  )
}
export default App;
