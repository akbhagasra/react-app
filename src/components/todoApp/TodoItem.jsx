import React, { useState } from "react";
import { useTodo } from "../../context/TodoContext";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo } = useTodo();
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.value);

  const handleCheck = () => {
    updateTodo(todo.id, {
      ...todo,
      isCompleted: !todo.isCompleted,
    });
    setIsEditMode(false);
  };
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        className="cursor-pointer"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={handleCheck}
      />
      <input
        value={todoMsg}
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditMode ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isEditMode}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isEditMode) {
            updateTodo(todo.id, {
              ...todo,
              value: todoMsg,
            });
          }
          setIsEditMode((prev) => !prev);
        }}
        disabled={todo.isCompleted}
      >
        {isEditMode ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
