import { useState } from "react";
import { NavLink } from "react-router-dom";

const apps = [
  {
    id: "id-1",
    name: "Currency App",
    route: "/currency-app",
  },
  {
    id: "id-2",
    name: "Todo App",
    route: "/todo-app",
  },
  {
    id: "id-2",
    name: "Store App",
    route: "/store-app",
  },
];

function HomeApp() {
  return (
    <div className="bg-gray-700 w-full min-h-screen grid grid-cols-3 gap-4 md:grid-cols-6 p-5">
      {apps.map((app) => (
        <NavLink
          key={app.id}
          to={app.route}
          className="bg-gray-500 rounded-lg text-white text-2xl text-center"
        >
          {app.name}
        </NavLink>
      ))}
    </div>
  );
}

export default HomeApp;
