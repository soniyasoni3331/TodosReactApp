import { useState } from "react"
import { TodoProvider } from "./context/TodoContext";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo =(todo)=>{
    setTodos((prev)=>[...prev, {id: Date.now(), ...todo}])
  }  
  const updateTodo =(id, todo)=>{
      setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ?  todo : prevTodo)))
  } 
   
  const deleteTodo = (id)=>{
    setTodos((prev)=> prev.filter((todo)=>todo.id !== id))
  }

  const toggleComplete = () =>{
    setTodos((prev) => prev.map((prevTodo)=> prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} :prevTodo))
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, toggleComplete, deleteTodo}}>
    <div className="bg-gray-900 min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2">Manages Your Daily Tasks</h1>
          {/* todo form */}
          <div>
            <input type="text" />
            <h1>this is a todo</h1>
          </div>
          {/* loop and add TodoItem  */}
          <div></div>
        </div>
    </div>
    </TodoProvider>
  )
}

export default App
