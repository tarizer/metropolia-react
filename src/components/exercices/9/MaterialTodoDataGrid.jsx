import { useState } from "react";
import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
export const MaterialTodoDataGrid = () => {
  const initialTodo = { description: "", date: "" };
  const [todo, setTodo] = useState(initialTodo);
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, id: Date.now() };
    setTodos([...todos, newTodo]);
    setTodo(initialTodo);
  };
  // console.log(todos);

  // const deleteTodo = (row) => {
  //   setTodos(todos.filter((todo, index) => index !== row));
  // };

  const columns = [
    { field: "description", headerName: "Description", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
  ];

  return (
    <>
      {/* <h1>Material Todo</h1> */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Material Todolist (DataGrid)</Typography>
        </Toolbar>
      </AppBar>
      <Stack
        direction="row"
        spacing={2}
        mt={2}
        justifyContent="center"
        alignItems="center"
      >
        <form onSubmit={addTodo} className="inline-form clean-input">
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

          <Button type="submit" startIcon={<SaveIcon />}>
            Add
          </Button>
        </form>
      </Stack>

      <div style={{ height: 300 }}>
        <DataGrid rows={todos} columns={columns} getRowId={(row) => row.id} />
      </div>
    </>
  );
};
