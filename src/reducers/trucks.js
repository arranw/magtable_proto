import { createSlice } from "redux-starter-kit";

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
      var start = Date.now();
      const truck = state.trucks.find(truck => truck.id === action.payload.truckNumber);

      console.log(action.payload);

      truck.employees[action.payload.slotIndex] = action.payload.employee;
      console.log(Date.now() - start);
    }
  }
});

const { actions, reducer } = trucksSlice;
export const { setTruckEmployee } = actions;
export default reducer;
