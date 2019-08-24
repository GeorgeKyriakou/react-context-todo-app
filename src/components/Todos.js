import React, { useContext, useEffect, forwardRef, Fragment } from "react";

import TodosContext from "../context/todos/todos.context";
import Navbar from "./Navbar";
import ConfirmModal from "./Confirm";
import Alert from "./Alert";

import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

import Album from "@material-ui/icons/Album";
import DeleteForever from "@material-ui/icons/DeleteForever";

const Todos = () => {
  const todosContext = useContext(TodosContext);
  const {
    setLoading,
    loading,
    loadTodos,
    todos,
    updateTodo,
    openConfirmModal,
    isConfirmModalOpen
  } = todosContext;

  useEffect(() => {
    setLoading();
    loadTodos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <Fragment>
        <Navbar></Navbar>

        <div className="todos-container">
          <div style={{ maxWidth: "100%" }}>
            <Alert />
            {isConfirmModalOpen && <ConfirmModal />}
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
          </div>
        </div>
      </Fragment>
    );
  }
};

const todosStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridGap: "1rem"
};

export default Todos;

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
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
