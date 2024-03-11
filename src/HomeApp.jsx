import { useState } from "react";
import { NavLink } from "react-router-dom";

function HomeApp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world from home!</h1>
      <NavLink to="/currency-app">Currency App</NavLink>
      <NavLink to="/todo-app">Todo App</NavLink>
    </>
  );
}

export default HomeApp;
