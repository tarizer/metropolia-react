import { useState } from "react";
import "./MaterialTodo.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
      {/* <h1>Material Todo</h1> */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Material Todolist</Typography>
        </Toolbar>
      </AppBar>
      <Stack
        direction="row"
        spacing={2}
        mt={2}
        justifyContent="center"
        alignItems="center"
      >
        <form onSubmit={addTodo}>
          <TextField
            variant="standard"
            label="Description"
            name="description"
            value={todo.description}
            onChange={inputChanged}
          />
          <TextField
            variant="standard"
            label="Date"
            name="date"
            value={todo.date}
            onChange={inputChanged}
          />

          {/* <input
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
        /> */}
          <Button type="submit">Add</Button>
        </form>
      </Stack>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => deleteTodo(index)}
                >
                  {" "}
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
