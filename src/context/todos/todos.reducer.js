import * as fromTypes from "./todos.types";

export default (state, action) => {
  switch (action.type) {
    case fromTypes.LOAD_TODOS_SUCCESS: {
      return {
        ...state,
        todos: action.payload,
        loading: false
      };
    }
    case fromTypes.CREATE_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false
      };
    }
    case fromTypes.UPDATE_TODO_SUCCESS: {
      const updatedTodo = action.payload;
      return {
        ...state,
        todos: state.todos.map(oldTodo =>
          oldTodo.id === updatedTodo.id ? updatedTodo : oldTodo
        ),
        loading: false
      };
    }
    case fromTypes.REMOVE_TODO_SUCCESS: {
      const removedTodo = action.payload;
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== removedTodo.id),
        selectedTodo: null,
        isConfirmModalOpen: false,
        loading: false
      };
    }
    case fromTypes.TOGGLE_CREATE_TODO_BAR: {
      return {
        ...state,
        isCreateTodoBaraOpen: !state.isCreateTodoBaraOpen
      };
    }
    case fromTypes.OPEN_CONFIRM_MODAL: {
      return {
        ...state,
        selectedTodo: action.payload,
        isConfirmModalOpen: true
      };
    }
    case fromTypes.CLOSE_CONFIRM_MODAL: {
      return {
        ...state,
        isConfirmModalOpen: false
      };
    }

    case fromTypes.SHOW_ALERT: {
      return {
        ...state,
        alertMessage: action.payload,
        showAlert: true
      };
    }
    case fromTypes.HIDE_ALERT: {
      return {
        ...state,
        showAlert: false
      };
    }
    default:
      return state;
  }
};
