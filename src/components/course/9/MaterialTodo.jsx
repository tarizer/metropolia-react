import { useState } from "react";

export const MaterialTodo = () => {
  const initialTodo = { description: "", date: "" };
  const [todo, setTodo] = useState(initialTodo);
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo(initialTodo);
  };

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  };

  return (
    <>
      <h1>Material Todo</h1>
      <form onSubmit={addTodo}>
        <input
          placeholder="Description"
          name="description"
          value={todo.description}
          onChange={inputChanged}
        />
        <input
          placeholder="Date"
          name="date"
          value={todo.date}
          onChange={inputChanged}
        />
        <button>Add</button>
      </form>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
