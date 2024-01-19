import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import PropTypes from "prop-types";
export const AddTodo = ({ addTodo }) => {
  const initialTodo = { description: "", date: "", priority: "" };

  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState(initialTodo);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    addTodo(todo);
    setTodo(initialTodo);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Add todo
      </Button>
      <Dialog open={open}>
        <DialogTitle>New todo</DialogTitle>
        <DialogContent>
          {" "}
          <TextField
            name="description"
            value={todo.description}
            onChange={inputChanged}
            margin="dense"
            label="Description"
            fullWidth
          />
          <TextField
            name="date"
            value={todo.date}
            onChange={inputChanged}
            margin="dense"
            label="Date"
            fullWidth
          />
          <TextField
            name="priority"
            value={todo.priority}
            onChange={inputChanged}
            margin="dense"
            label="Priority"
            fullWidth
          />{" "}
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
