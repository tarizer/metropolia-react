/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Contact from "./routes/contact.jsx";
import MultipleInput from "./components/course/5/MultipleInput.jsx";
import TodoList from "./components/course/5/TodoList.jsx";
import Counter from "./components/exercices/4/Counter.jsx";
import Message from "./components/exercices/4/Message.jsx";
import AgeCheck from "./components/exercices/5/AgeCheck.jsx";
import Calculator from "./components/exercices/5/Calculator.jsx";
import UserRegistration from "./components/exercices/5/UserRegistration.jsx";
import ChangeColor from "./components/exercices/4/ChangeColor.jsx";

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
      {
        path: "exercices/react-counter",
        element: <Counter />,
      },
      {
        path: "exercices/conditional-rendering",
        element: <Message message="Hello, world!" />,
      },
      {
        path: "exercices/change-color",
        element: <ChangeColor />,
      },
      {
        path: "exercices/age-check",
        element: <AgeCheck />,
      },
      {
        path: "exercices/calculator",
        element: <Calculator />,
      },
      {
        path: "exercices/user-registration",
        element: <UserRegistration />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
