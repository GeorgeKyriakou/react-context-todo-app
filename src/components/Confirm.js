import React, { Fragment, useContext } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TodosContext from "../context/todos/todos.context";

const ConfirmModal = () => {
  const todosContext = useContext(TodosContext);
  const {
    isConfirmModalOpen,
    closeModal,
    removeTodo,
    selectedTodo,
    setAlert
  } = todosContext;

  const handleRemoveTodo = () => {
    removeTodo(selectedTodo);
    setAlert("Removed!");
  };

  return (
    <Fragment>
      <Dialog
        open={isConfirmModalOpen}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Remove {selectedTodo.title}?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary" autoFocus>
            Cancel
          </Button>
          <Button onClick={handleRemoveTodo} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default ConfirmModal;
