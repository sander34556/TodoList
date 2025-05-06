import Task from "./Task"


const TaskContainer = ({ todos, deleteTodolist, updateTodo, toggleCompleted }) => {

    return (
        <div className="flex flex-col items-center rounded-md shadow max-h-[500px] min-w-xs sm:min-w-[500px] mt-10 bg-white overflow-y-auto">
            {
                todos.map((todo, index) => (
                    <Task key={index} todo={todo} deleteTodolist={deleteTodolist} updateTodo={updateTodo} toggleCompleted={toggleCompleted} />
                ))
            }
        </div>
    )
}
export default TaskContainer