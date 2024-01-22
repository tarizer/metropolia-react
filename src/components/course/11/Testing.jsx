import { useState } from "react";

export default function Testing() {
  const [todo, setTodo] = useState({ description: "", date: "", status: "" });
  const [todos, setTodos] = useState([]);

  const onChangeHandle = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", status: "" });
  };

  return (
    <>
      <h3>My Todolist</h3>
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
      </form>
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
}
