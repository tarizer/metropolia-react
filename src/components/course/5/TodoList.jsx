import { useState } from "react";
import "./App.css";
import TodoTable from "./TodoTable";

export function TodoList() {
  const todoInit = {
    description: "",
    date: "",
  };
  const todosInit = [
    // Example initial list of todos
    { id: 1, description: "Buy groceries", date: "2024-01-01" },
    { id: 2, description: "Do laundry", date: "2024-01-02" },
    { id: 3, description: "Clean the house", date: "2024-01-03" },
  ];

  const [todo, setTodo] = useState(todoInit);
  const [todos, setTodos] = useState(todosInit);

  const onChangeHandle = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandle = (e) => {
    // Same as onClickHandle with added preventDefault
    e.preventDefault();
    const todoWithId = {
      ...todo,
      id: Date.now(), // To use as key
    };
    setTodos([...todos, todoWithId]);
    setTodo({ ...todoInit });
  };

  const deleteHandle = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  console.log(todos);

  return (
    <>
      {/* <p>Description: {todo.description}</p>
      <p>Date: {todo.date}</p> */}
      <h2>Add a new task</h2>
      <form onSubmit={onSubmitHandle}>
        <input
          placeholder="Description"
          name="description"
          value={todo.description}
          onChange={onChangeHandle}
        />
        <input
          placeholder="Date"
          name="date"
          value={todo.date}
          onChange={onChangeHandle}
        />
        {/* <button type="submit" onClick={onClickHandle}> */}
        <button type="submit">Submit</button>
      </form>

      <h2>Tasks</h2>

      <TodoTable todos={todos} deleteHandle={deleteHandle} />
    </>
  );
}
