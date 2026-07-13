import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  removeTodo,
  toggleTodo,
} from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (confirmed) {
      dispatch(removeTodo(id));
    }
  };

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-5">
        Your Todos
      </h2>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="
            flex
            justify-between
            items-center
            bg-gray-900
            border
            border-gray-800
            px-5
            py-4
            rounded-xl
            shadow-md
            hover:border-indigo-500
            transition
            "
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  dispatch(toggleTodo(todo.id))
                }
              />

              <span
                className={`text-lg ${
                  todo.completed
                    ? "line-through text-gray-500"
                    : "text-white"
                }`}
              >
                {todo.text}
              </span>
            </div>

            <button
              onClick={() => handleDelete(todo.id)}
              className="
              bg-red-500
              hover:bg-red-600
              text-white
              p-2
              rounded-lg
              transition
              "
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;