import React, { useContext } from "react";
import TodosContext from "../context/todos/todos.context";
import Button from "@material-ui/core/Button";

const NewTodoItem = () => {
  const todosContext = useContext(TodosContext);
  const { openCreateModal } = todosContext;

  return (
    <div className="">
      <Button className="btn" onClick={openCreateModal}>
        New
      </Button>
    </div>
  );
};

export default NewTodoItem;
