import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForms() {
  const [todo, setTodo] = useState("")
  
  const {addTodo} = useTodo()

  const add = (e) =>{
    e.preventDefault() 

    if(!todo) return 
    addTodo({ todo:todo, completed: false})
    setTodo("")
  }

  return (
    <form onSubmit={add}>
      <div className='w-full flex'>
      <input type="text"
      placeholder='Write Todo here'
      className=' w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
      value={todo} 
      onChange={(e)=> setTodo(e.target.value)}/>
      <button type='submit' className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 z-10'>
        Add
      </button>
      </div>
      
    </form>
  )
}

export default TodoForms