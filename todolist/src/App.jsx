import { useState } from "react";
import "./App.css";
import TodoTable from "./TodoTable";

function App() {
  const todoInit = {
    description: "",
    date: "",
  };
  const [todo, setTodo] = useState(todoInit);
  const [todos, setTodos] = useState([]);

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
      <p>Description: {todo.description}</p>
      <p>Date: {todo.date}</p>
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

export default App;
