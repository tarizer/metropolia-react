import { useEffect, useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export const FirebaseTodo = () => {
  // Bring your own DB
  const firebaseDB = "https://xxx.firebasedatabase.app/items/.json";

  const [todos, setTodos] = useState([]);
  const columnDefs = [
    { field: "date", sortable: true, filter: true },
    { field: "description", sortable: true, filter: true },
    { field: "priority", sortable: true, filter: true },
  ];
  const fetchItems = () => {
    fetch(firebaseDB)
      .then((response) => response.json())
      .then((data) =>
        setTodos(
          Object.entries(data).map(([id, { date, description, priority }]) => ({
            id,
            date,
            description,
            priority,
          }))
        )
      )
      .catch((error) => console.log("Error: ", error));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  {
    // console.log(todos);
  }
  return (
    <>
      <h1>FirebaseTodo</h1>
      <div className="ag-theme-material" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={todos} columnDefs={columnDefs} />
      </div>
    </>
  );
};
