import React, { createContext, useContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      value: "msg",
      isCompleted: false,
    },
  ],
  addTodo: (msg) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
