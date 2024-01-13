/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root.jsx";
import { ErrorPage } from "./error-page.jsx";

import { Home } from "@components/Home.jsx";
import { MultipleInput } from "@course/5/MultipleInput.jsx";
import { TodoList } from "@course/5/TodoList.jsx";
import { Nasa } from "@course/6/Nasa.jsx";
import { UserList } from "@course/6/Userlist.jsx";

import { Counter } from "@exercices/4/Counter.jsx";
import { Message } from "@exercices/4/Message.jsx";
import { ChangeColor } from "@exercices/4/ChangeColor.jsx";
import { AgeCheck } from "@exercices/5/AgeCheck.jsx";
import { Calculator } from "@exercices/5/Calculator.jsx";
import { UserRegistration } from "@exercices/5/UserRegistration.jsx";
import { UserInfo } from "./components/course/6/UserInfo";
import { Trivia } from "./components/exercices/6/Trivia";
import { Github } from "./components/exercices/6/Github";
import { GithubSearch } from "./components/exercices/6/GithubSearch";
import { TodoGrid } from "./components/course/7/TodoGrid";
import { TodoGridEnhanced } from "./components/exercices/7/TodoGridEnhanced";
import { NotFound } from "./components/NotFound";
import { TodoListApp } from "./components/exercices/8/TodoListApp";
import { HomeRouter } from "./components/exercices/8/HomeRouter";
import { TodoListRouter } from "./components/exercices/8/TodoListRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
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
      {
        path: "course/user-list",
        element: <UserList />,
      },
      {
        path: "course/user-info",
        element: <UserInfo />,
      },
      {
        path: "course/trivia",
        element: <Trivia />,
      },
      {
        path: "course/github",
        element: <Github />,
      },
      {
        path: "course/github-search",
        element: <GithubSearch />,
      },
      {
        path: "course/todogrid",
        element: <TodoGrid />,
      },
      {
        path: "exercices/todogrid-enhanced",
        element: <TodoGridEnhanced />,
      },
      {
        path: "exercices/todo-list-router",
        element: <TodoListApp />,
        children: [
          {
            path: "home",
            element: <HomeRouter />,
          },
          {
            path: "app",
            element: <TodoListRouter />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
