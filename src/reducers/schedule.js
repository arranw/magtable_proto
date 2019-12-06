import { createSlice } from "redux-starter-kit";

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    employees: null,
    startTimes: null,
    loading: true
  },
  reducers: {
    setSchedule(state, action) {
      state.employees = action.payload.employees;
      state.startTimes = action.payload.startTimes;
      state.loading = false;
    },
    removeFromSchedule(state, action) {
      state.employees = state.employees.filter(emp => emp.id !== action.payload.id);
    }
  }
});

const { actions, reducer } = scheduleSlice;
export const { setSchedule, removeFromSchedule } = actions;
export default reducer;
