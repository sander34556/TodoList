import { useEffect, useState } from "react"
import InputTask from "./components/InputTask"
import TaskContainer from "./components/TaskContainer";



const App = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  console.log(todos);

  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("todos");
  //   if (savedTodos) {
  //     setTodos(JSON.parse(savedTodos));
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="min-h-[35vh] bg-gradient-to-r from-purple-700 to-pink-600 flex flex-col pt-24 items-center mx-auto relative">
      <div className="absolute flex flex-col items-center">

        <h1 className="mb-8 text-white font-bold text-5xl  tracking-[0.1em] sm:tracking-[0.4em] ">
          TODOLIST
        </h1>

        <InputTask addTodolist={addTodolist} />

        <TaskContainer todos={todos} deleteTodolist={deleteTodolist} updateTodo={updateTodo} toggleCompleted={toggleCompleted} />

      </div>

    </div>
  )

  function generateId() {
    return Math.floor(Math.random() * 10001);
  }

  function addTodolist(content) {
    const newTodo = {
      id: generateId(),
      content: content,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  function deleteTodolist(id) {
    const newTodosList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodosList);
  }

  function updateTodo(id, content) {
    const newTodo = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, content };
    });
    setTodos(newTodo);
  }

  function toggleCompleted(id) {
    const updateTodo = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return { ...todo, completed: !todo.completed };
    });
    setTodos(updateTodo);
  }

}
export default App