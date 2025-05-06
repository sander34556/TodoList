import { Pencil, X, Check, CheckCheck } from "lucide-react"
import { useState } from "react"


const Task = ({ todo, deleteTodolist, updateTodo, toggleCompleted }) => {
  const [editMode, setEditMode] = useState(false);

  const toggleEdit = () => {
    setEditMode(prev => !prev)
  }

  return (
    <div className="flex items-center bg-white p-1 min-w-xs w-full border-b last:border-b-0 border-gray-300">
      {editMode
        ? <input
          autoFocus
          type="text"
          className="bg-zinc-100 text-gray-700 w-full rounded px-4 py-2 border border-gray-300 outline-none"
          value={todo.content}
          onChange={(e) => updateTodo(todo.id, e.target.value)}
          onBlur={() => { setEditMode(false) }}
          onKeyDown={(e) => e.key === "Enter" && setEditMode(false)}
        />
        : <>
          <span
            className={` hover:text-gray-700 hover:bg-gray-200 rounded-md ml-2 p-1 cursor-pointer  ${todo.completed ? "text-gray-400" : "text-green-500"}`}
            onClick={() => toggleCompleted(todo.id)}
          >
            <CheckCheck size={16} />
          </span>
          <div className={`bg-white w-full rounded px-2 py-2 ${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}>
            {todo.content}
          </div>
        </>
      }

      <div className="flex items-center gap-1 mx-2">
        {
          editMode
            ?
            <button
              onClick={() => { setEditMode(false) }}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md p-1 cursor-pointer"
            >
              <Check size={16} />
            </button>
            :
            <button
              onClick={() => toggleEdit()}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md p-1 cursor-pointer"
            >
              <Pencil size={16} />
            </button>
        }

        <button
          onClick={() => { deleteTodolist(todo.id) }}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md p-1 cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
export default Task