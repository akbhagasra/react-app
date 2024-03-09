import React from "react";
import ReactDOM from "react-dom/client";
import HomeApp from "./HomeApp.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CurrencyApp from "./CurrencyApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeApp />,
  },
  {
    path: "currency-app",
    element: <CurrencyApp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
