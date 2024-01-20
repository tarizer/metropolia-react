import { useEffect, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddTodo } from "./AddTodo";

export const Bookstore = () => {
  // Bring your own DB
  // const firebaseDB = "https://xxx.firebasedatabase.app/items/";
  const firebaseDB = import.meta.env.VITE_FIREBASE_BOOKSTORE;

  const [todos, setTodos] = useState([]);

  const columnDefs = [
    { field: "title", sortable: true, filter: true },
    { field: "author", sortable: true, filter: true },
    { field: "year", sortable: true, filter: true },
    { field: "isbn", sortable: true, filter: true },
    { field: "price", sortable: true, filter: true },
    {
      headerName: "",
      field: "id",
      width: 90,
      cellRenderer: (params) => (
        <IconButton
          onClick={() => deleteTodo(params.value)}
          size="small"
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];
  const fetchItems = () => {
    fetch(`${firebaseDB}.json`)
      .then((response) => response.json())
      .then((data) =>
        setTodos(
          Object.entries(data).map(
            ([id, { title, author, year, isbn, price }]) => ({
              id,
              title,
              author,
              year,
              isbn,
              price,
            })
          )
        )
      )
      .catch((error) => console.log("Error: ", error));
  };

  const addTodo = (newTodo) => {
    fetch(`${firebaseDB}.json`, {
      method: "POST",
      body: JSON.stringify(newTodo),
    })
      .then(() => fetchItems())
      .catch((err) => console.error(err));
  };

  const deleteTodo = (id) => {
    fetch(`${firebaseDB}${id}.json`, {
      method: "DELETE",
    })
      .then(() => fetchItems())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <AppBar position="static" style={{ width: "90%" }}>
        <Toolbar>
          <Typography variant="h5">Firebase Bookstore</Typography>
        </Toolbar>
      </AppBar>
      <AddTodo addTodo={addTodo} />
      <div className="ag-theme-material" style={{ height: 400, width: "90%" }}>
        <AgGridReact rowData={todos} columnDefs={columnDefs} />
      </div>
    </>
  );
};
