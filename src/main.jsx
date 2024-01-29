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
import { MaterialTodo } from "./components/course/9/MaterialTodo";
import { MaterialTodoDataGrid } from "./components/exercices/9/MaterialTodoDataGrid";
import { FirebaseTodo } from "./components/course/10/FirebaseTodo";
import { Bookstore } from "./components/exercices/10/Bookstore";
import { Testing } from "./components/course/11/Testing";
import { TodoListRemove } from "./components/exercices/11/TodoListRemove";

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
        path: "metropolia-react",
        element: <Home />,
      },
      {
        path: "metropolia-react/course/multiple-imput",
        element: <MultipleInput />,
      },
      {
        path: "metropolia-react/course/todo",
        element: <TodoList />,
      },
      {
        path: "metropolia-react/exercices/react-counter",
        element: <Counter />,
      },
      {
        path: "metropolia-react/exercices/conditional-rendering",
        element: <Message message="Hello, world!" />,
      },
      {
        path: "metropolia-react/exercices/change-color",
        element: <ChangeColor />,
      },
      {
        path: "metropolia-react/exercices/age-check",
        element: <AgeCheck />,
      },
      {
        path: "metropolia-react/exercices/calculator",
        element: <Calculator />,
      },
      {
        path: "metropolia-react/exercices/user-registration",
        element: <UserRegistration />,
      },
      {
        path: "metropolia-react/course/nasa",
        element: <Nasa />,
      },
      {
        path: "metropolia-react/course/user-list",
        element: <UserList />,
      },
      {
        path: "metropolia-react/course/user-info",
        element: <UserInfo />,
      },
      {
        path: "metropolia-react/course/trivia",
        element: <Trivia />,
      },
      {
        path: "metropolia-react/course/github",
        element: <Github />,
      },
      {
        path: "metropolia-react/course/github-search",
        element: <GithubSearch />,
      },
      {
        path: "metropolia-react/course/todogrid",
        element: <TodoGrid />,
      },
      {
        path: "metropolia-react/exercices/todogrid-enhanced",
        element: <TodoGridEnhanced />,
      },
      {
        path: "metropolia-react/exercices/todo-list-router",
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
      {
        path: "metropolia-react/course/material-todo",
        element: <MaterialTodo />,
      },
      {
        path: "metropolia-react/exercices/material-todo-datagrid",
        element: <MaterialTodoDataGrid />,
      },
      {
        path: "metropolia-react/course/firebase-todo",
        element: <FirebaseTodo />,
      },
      {
        path: "metropolia-react/exercices/bookstore",
        element: <Bookstore />,
      },
      {
        path: "metropolia-react/course/testing",
        element: <Testing />,
      },
      {
        path: "metropolia-react/exercices/todolist-remove",
        element: <TodoListRemove />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
