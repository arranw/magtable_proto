import { createSlice } from "redux-starter-kit";

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    trucks: [
      {
        id: "23",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "24",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "25",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "26",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "27",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "28",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "29",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "30",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "31",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "32",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "33",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "34",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "35",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "36",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "37",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "38",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "39",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "40",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "41",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "42",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "43",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "44",
        status: "INOP",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "45",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      },
      {
        id: "46",
        employees: [
          { name: null, start: null, end: null },
          { name: null, start: null, end: null }
        ]
      }
    ]
  },
  reducers: {
    setTruckEmployee(state, action) {
      const truck = state.trucks.find(truck => truck.id === action.payload.truckNumber);
      truck.employees[action.payload.slotIndex] = action.payload.employee;
    },
    setTruckLocation(state, action) {
      const truck = state.trucks.find(truck => truck.id === action.payload.truckNumber);
      truck.location = action.payload.location;
    }
  }
});

const { actions, reducer } = trucksSlice;
export const { setTruckEmployee, setTruckLocation } = actions;
export default reducer;
