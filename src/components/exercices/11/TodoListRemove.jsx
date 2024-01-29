import { useState } from "react";

export const TodoListRemove = () => {
  const todoInit = {
    description: "",
    date: "",
    status: "",
  };
  const todosInit = [
    // Example initial list of todos
    { id: 1, description: "Buy groceries", date: "Tomorrow", status: "Open" },
    { id: 2, description: "Do laundry", date: "2024-01-02", status: "Open" },
    {
      id: 3,
      description: "Clean the house",
      date: "2024-01-03",
      status: "Open",
    },
  ];

  const [todo, setTodo] = useState(todoInit);
  const [todos, setTodos] = useState(todosInit);

  const onChangeHandle = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", status: "" });
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <>
      <h3>My Todolist with Remove Button</h3>
      <form onSubmit={onSubmitHandle} className="inline-form">
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
        <input
          placeholder="Status"
          name="status"
          value={todo.status}
          onChange={onChangeHandle}
        />
        <button type="submit">Add</button>
        <button type="button" onClick={clearTodos}>
          Clear
        </button>
      </form>
      <h2>Tasks</h2>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>{todo.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
