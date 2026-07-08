import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 
  className="
    text-2xl
    font-bold
    text-center
    text-gray-800
    mb-6
    tracking-wide
  "
>
  TODO App 
  <span className="text-indigo-600">
    (Majorly to understand functionality)
  </span>
</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App