// import fetch from "cross-fetch";
import { mockClients } from "./mockClients";

const clients = (state = mockClients, action) => {
  switch (action.type) {
    case "FETCH_CLIENTS":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default clients;
