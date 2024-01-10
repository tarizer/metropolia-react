/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root.jsx";
import { ErrorPage } from "./error-page.jsx";
import { MultipleInput } from "@course/5/MultipleInput.jsx";
import { TodoList } from "@course/5/TodoList.jsx";

import { Counter } from "@exercices/4/Counter.jsx";
import { Message } from "@exercices/4/Message.jsx";
import { AgeCheck } from "@exercices/5/AgeCheck.jsx";
import { Calculator } from "@exercices/5/Calculator.jsx";
import { UserRegistration } from "@exercices/5/UserRegistration.jsx";
import { ChangeColor } from "@exercices/4/ChangeColor.jsx";
import { Home } from "./components/Home.jsx";
import { Nasa } from "@course/6/Nasa.jsx";
import { Userlist } from "@course/6/Userlist.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
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
      {
        path: "course/nasa",
        element: <Nasa />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
