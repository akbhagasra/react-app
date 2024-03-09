import { useState } from "react";
import {} from "react-router-dom";

function HomeApp() {
  const [count, setCount] = useState(0);

  return (
    <h1 className="text-3xl font-bold underline">Hello world from home!</h1>
  );
}

export default HomeApp;
