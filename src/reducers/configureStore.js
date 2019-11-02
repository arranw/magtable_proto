import { configureStore } from "redux-starter-kit";
import trucksReducer from "./trucks";
import scheduleReducer from "./schedule";

// configureStore automatically adds the Redux DevTools and combines reducers
export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
    schedule: scheduleReducer
  }
});
