/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Contact from "./routes/contact.jsx";
import MultipleInput from "./components/5/MultipleInput.jsx";
import TodoList from "./components/5/TodoList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "contacts/:contactId",
        path: "contact",
        element: <Contact />,
      },
      {
        path: "course/multiple-imput",
        element: <MultipleInput />,
      },
      {
        path: "course/todo",
        element: <TodoList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
