import { Link, Outlet } from "react-router-dom";

export const TodoListApp = () => {
  return (
    <>
      <h1>Todo list app with router</h1>
      <p>
        <Link to={`/exercices/todo-list-router/home`}>Home</Link>
        <span> - </span>
        <Link to={`/exercices/todo-list-router/app`}>Todolist</Link>
      </p>
      <Outlet />
    </>
  );
};
