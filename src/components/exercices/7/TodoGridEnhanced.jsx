import { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export const TodoGridEnhanced = () => {
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

  // Column definitions for ag-grid
  const columnDefs = [
    {
      field: "description",
      sortable: true,
      filter: true,
      suppressMovable: true,
    },
    { field: "date", sortable: true, filter: true, suppressMovable: true },
    { field: "status", sortable: true, filter: true, suppressMovable: true },
  ];

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ description: "", date: "", status: "" });
  };

  return (
    <>
      <h1>Todo Grid Enhanced</h1>
      <form onSubmit={onSubmitHandler} className="flex-row">
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
        <input
          placeholder="Status"
          name="status"
          value={todo.status}
          onChange={inputChanged}
        />

        {/* <button type="submit">Add</button> */}
        <AwesomeButton type="whatsapp">Add</AwesomeButton>
      </form>

      <h2>Tasks</h2>
      <p>{todo.date}</p>
      <div className="ag-theme-material" style={{ height: 400, width: 600 }}>
        <AgGridReact
          rowData={todos}
          columnDefs={columnDefs}
          animateRows={true}
        />
      </div>
    </>
  );
};
