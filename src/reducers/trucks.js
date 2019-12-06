import { createSlice } from "redux-starter-kit";

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    trucks: [
      {
        id: "23",
        operator: null,
        trainee: null
      },
      {
        id: "24",
        operator: null,
        trainee: null
      },
      {
        id: "25",
        operator: null,
        trainee: null
      },
      {
        id: "26",
        operator: null,
        trainee: null
      },
      {
        id: "27",
        operator: null,
        trainee: null
      },
      {
        id: "28",
        operator: null,
        trainee: null
      },
      {
        id: "29",
        operator: null,
        trainee: null
      },
      {
        id: "30",
        operator: null,
        trainee: null
      },
      {
        id: "31",
        operator: null,
        trainee: null
      },
      {
        id: "32",
        operator: null,
        trainee: null
      },
      {
        id: "33",
        operator: null,
        trainee: null
      },
      {
        id: "34",
        operator: null,
        trainee: null
      },
      {
        id: "35",
        operator: null,
        trainee: null
      },
      {
        id: "36",
        operator: null,
        trainee: null
      },
      {
        id: "37",
        operator: null,
        trainee: null
      },
      {
        id: "38",
        operator: null,
        trainee: null
      },
      {
        id: "39",
        operator: null,
        trainee: null
      },
      {
        id: "40",
        operator: null,
        trainee: null
      },
      {
        id: "41",
        operator: null,
        trainee: null
      },
      {
        id: "42",
        operator: null,
        trainee: null
      },
      {
        id: "43",
        operator: null,
        trainee: null
      },
      {
        id: "44",
        status: "INOP",
        operator: null,
        trainee: null
      },
      {
        id: "45",
        operator: null,
        trainee: null
      },
      {
        id: "46",
        operator: null,
        trainee: null
      }
    ]
  },
  reducers: {
    setTruckEmployee(state, action) {
      const truck = state.trucks.find(truck => truck.id === action.payload.truckNumber);
      truck.operator = action.payload.employee;
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
