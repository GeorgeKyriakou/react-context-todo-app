import React, { useContext } from "react";
import TodosContext from "../context/todos/todos.context";
import Button from "@material-ui/core/Button";

const NewTodoButton = () => {
  const todosContext = useContext(TodosContext);
  const { toggleCreateBar } = todosContext;

  return (
    <div className="">
      <Button className="btn" onClick={toggleCreateBar}>
        New
      </Button>
    </div>
  );
};

export default NewTodoButton;
