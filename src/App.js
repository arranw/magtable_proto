import React from "react";
import "./App.css";

import { store } from "./reducers/configureStore";
import { Provider } from "react-redux";
import AssignTable from "./components/Table/TruckAssignTable";

function App() {
  return (
    <Provider store={store}>
      <AssignTable></AssignTable>
    </Provider>
  );
}

export default App;
