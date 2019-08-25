import React, { useContext, forwardRef } from "react";
import TodosContext from "../context/todos/todos.context";

import MaterialTable from "material-table";
import Album from "@material-ui/icons/Album";
import DeleteForever from "@material-ui/icons/DeleteForever";

import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const TodosTable = () => {
  const todosContext = useContext(TodosContext);
  const { todos, updateTodo, openConfirmModal, loading } = todosContext;

  return (
    <MaterialTable
      icons={tableIcons}
      title=""
      isLoading={loading}
      columns={[
        {
          title: "Done",
          field: "completed",
          render: rowData => (rowData.completed ? <Check /> : ""),
          headerStyle: { width: "10%", padding: "1%" }
        },
        { title: "Title", field: "title" },
        { title: "Description", field: "description" },
        {
          title: "Due Date",
          field: "due_date",
          render: rowData => new Date(rowData.due_date).toDateString()
        }
      ]}
      data={todos}
      options={{ rowStyle: { height: "3.7rem" } }}
      actions={[
        {
          icon: () => <Album />,
          tooltip: "Complete",
          onClick: (_, todo) => {
            updateTodo({ ...todo, completed: !todo.completed });
          }
        },
        {
          icon: () => <DeleteForever />,
          tooltip: "Remove",
          onClick: (_, todo) => {
            openConfirmModal(todo);
          }
        }
      ]}
    />
  );
};

export default TodosTable;

const tableIcons = {
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
