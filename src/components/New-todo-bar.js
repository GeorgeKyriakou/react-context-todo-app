import React, { useContext } from "react";
import TodosContext from "../context/todos/todos.context";
import { Button, TextField } from "@material-ui/core";

const NewTodoBar = () => {
  const todosContext = useContext(TodosContext);
  const { createTodo, setAlert } = todosContext;

  const newTodo = {
    title: "",
    description: "",
    due_date: "",
    completed: false
  };

  const now = new Date();
  const defaultDate = `${now.getFullYear()}-${(
    "0" +
    (now.getMonth() + 1)
  ).slice(-2)}-${("0" + now.getDate()).slice(
    -2
  )}T${now.getHours()}:${now.getMinutes()}`;

  const onChange = event => {
    newTodo[event.target.name] = event.target.value;
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (newTodo.title === "" || newTodo.description === "") {
      setAlert("Title and Description fields are mandatory");
    } else {
      createTodo(newTodo);
    }
  };

  return (
    <form className="create-form" onSubmit={handleOnSubmit}>
      <TextField label="Title" name="title" onChange={onChange} />
      <TextField
        label="Description"
        name="description"
        onChange={onChange}
        style={{ width: "500px" }}
      />
      <TextField
        id="datetime-local"
        label="Due Date"
        name="due_date"
        type="datetime-local"
        defaultValue={defaultDate}
        onChange={onChange}
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button className="btn" type="submit">
        Create
      </Button>
    </form>
  );
};

export default NewTodoBar;
