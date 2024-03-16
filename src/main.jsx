import React from "react";
import ReactDOM from "react-dom/client";
import HomeApp from "./HomeApp.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CurrencyApp from "./CurrencyApp.jsx";
import TodoApp from "./TodoApp.jsx";
import StoreApp from "./StoreApp.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeApp />,
  },
  {
    path: "currency-app",
    element: <CurrencyApp />,
  },
  {
    path: "todo-app",
    element: <TodoApp />,
  },
  {
    path: "store-app",
    element: (
      <Provider store={store}>
        <StoreApp />
      </Provider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
