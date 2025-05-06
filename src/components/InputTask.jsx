import { PlusIcon } from "lucide-react";
import { useState } from "react";

const InputTask = ({ addTodolist }) => {
    const [input, setInput] = useState("");

    const handleAdd = () => {
        if (!input.trim()) return;
        addTodolist(input);
        setInput("");
    }

    return (
        <div className="flex items-center bg-white rounded shadow-md p-1 min-w-xs sm:min-w-[500px] ">
            <input
                type="text"
                className="bg-white text-gray-700 w-full outline-none rounded px-4 py-2"
                placeholder="Enter Todo list here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button
                onClick={() => { handleAdd() }}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md mx-1 "
            >
                <PlusIcon />
            </button>
        </div>
    )
}
export default InputTask