import React, { Component } from "react";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton
} from "@material/react-dialog";
import TodosContext from "../context/todos/todos.context";

const ConfirmModal = () => {
  const todosContext = useContext(TodosContext);
  const { openCreateModal } = todosContext;

  return (
    <Dialog open={isOpen}>
      <DialogTitle>My Dialog</DialogTitle>
      <DialogContent>
        <MyDialogContent />
      </DialogContent>
      <DialogFooter>
        <DialogButton action="dismiss">Dismiss</DialogButton>
        <DialogButton action="accept" isDefault>
          Accept
        </DialogButton>
      </DialogFooter>
    </Dialog>
  );
};

export default ConfirmModal;
