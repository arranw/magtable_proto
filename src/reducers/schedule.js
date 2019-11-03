import { createSlice } from "redux-starter-kit";

const scheduleSlice = createSlice({
  name: "schedule",
  initialState: {
    schedule: null,
    loading: true
  },
  reducers: {
    setSchedule(state, action) {
      state.schedule = action.payload;
      state.loading = false;
    },
    setEmployeeTruck(state, action) {
      state.schedule.forEach(shift => {
        shift.employees.forEach(emp => {
          if (emp.name === action.payload.employee.name) {
            emp.truck = action.payload.truckNumber;
          }
        });
      });
      // @todo ^ foreach
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

const { actions, reducer } = scheduleSlice;
export const { setSchedule, setEmployeeTruck } = actions;
export default reducer;
