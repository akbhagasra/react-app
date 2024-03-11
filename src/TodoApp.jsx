import React, { useEffect, useState } from "react";
import TodoItem from "./components/todoApp/TodoItem";
import TodoForm from "./components/todoApp/TodoForm";
import { TodoProvider } from "./context/TodoContext";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (msg) => {
    setTodos((prev) => [
      { id: Date.now(), value: msg, isCompleted: false },
      ...prev,
    ]);
    console.log("tds", todos);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((td) => (td.id === id ? todo : td)));
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        id === item.id ? { isCompleted: !item.isCompleted, ...item } : item
      )
    );
  };

  useEffect(() => {
    const lst = JSON.parse(localStorage.getItem("todos"));
    console.log(localStorage.getItem("todos"));
    if (lst && lst.length) setTodos(lst);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap  gap-y-3">
            {todos.map((item) => (
              <div key={item.id} className="w-full">
                <TodoItem todo={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default TodoApp;
