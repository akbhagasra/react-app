import React from "react";
import AddTodo from "./components/storeApp/AddTodo";
import { useSelector, useDispatch, Provider } from "react-redux";
import { removeTodo } from "./features/todo/todoSlice";
import { store } from "./app/store";

function StoreApp() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div className="w-full min-h-screen bg-stone-600">
      <AddTodo />
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </div>
  );
}

export default StoreApp;
