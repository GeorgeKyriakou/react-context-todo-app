import React, { useContext } from "react";
import TodosContext from "../context/todos/todos.context";
import Button from "@material-ui/core/Button";

const NewTodoItem = () => {
  const todosContext = useContext(TodosContext);
  const { openCreateModal } = todosContext;

  const showModal = () => {
    openCreateModal();
  };

  return (
    <div className="">
      <Button className="btn" onClick={showModal}>
        New
      </Button>
    </div>
  );
};

export default NewTodoItem;
