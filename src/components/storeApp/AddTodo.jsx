import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

function AddTodo() {
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (event) => {
    event.preventDefault();
    dispatch(addTodo({ text: msg }));
    setMsg("");
  };
  return (
    <form onSubmit={handleAdd} className="flex">
      <input
        type="text"
        onChange={(e) => setMsg(e.target.value)}
        value={msg}
        placeholder="Write todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
