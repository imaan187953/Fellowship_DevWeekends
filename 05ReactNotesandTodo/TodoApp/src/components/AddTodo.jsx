import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form 
      onSubmit={addTodoHandler} 
      className="flex gap-3 mt-8 w-full max-w-xl mx-auto"
    >

      <input
        type="text"
        className="
        flex-1
        bg-gray-900 
        text-white
        border border-gray-700
        rounded-xl
        px-5 py-3
        outline-none
        placeholder-gray-400
        focus:border-indigo-500
        focus:ring-2
        focus:ring-indigo-500/30
        transition
        "
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        type="submit"
        className="
        bg-indigo-600
        hover:bg-indigo-700
        text-white
        font-semibold
        px-6
        py-3
        rounded-xl
        transition
        duration-300
        shadow-md
        hover:shadow-indigo-500/30
        "
      >
        Add Todo
      </button>

    </form>
  )
}

export default AddTodo