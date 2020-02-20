import uuid from "uuid";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS } from "../actions/types";

const initialState = {
  items: [
    { id: uuid(), name: "Eggs" },
    { id: uuid(), name: "Peas" },
    { id: uuid(), name: "Potato" }
  ]
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case GET_ITEMS:
      return {
        ...state
      };
    default:
      return state;
  }
}
