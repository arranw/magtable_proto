import { createSlice } from "redux-starter-kit";
const _ = require("lodash");

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    trucks: [
      {
        id: "25",
        employees: [null, null]
      },
      {
        id: "26",
        employees: [null, null]
      },
      {
        id: "27",
        employees: [null, null]
      }
    ]
  },
  reducers: {
    setTruckEmployee(state, action) {
      const truck = state.trucks.find(truck => truck.id === action.payload.truckNumber);
      truck.employees[action.payload.slotIndex] = action.payload.employee;
    },
    toggleTodo(state, action) {
      const todo = state.find(todo => todo.id === action.payload);
      todo.complete = !todo.complete;
    },
    deleteTodo(state, action) {
      return state.filter(todo => todo.id !== action.payload);
    }
  }
});

const { actions, reducer } = trucksSlice;
export const { setTruckEmployee } = actions;
export default reducer;
