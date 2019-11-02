import React from "react";
import "./App.css";

import { store } from "./reducers/configureStore";
import { Provider } from "react-redux";
import AssignTable from "./components/Table/AssignTable";

function App() {
  // const setEmployee = (index, slotIndex, employee) => {
  //   let tmp = [...trucks];

  //   console.log(index);

  //   tmp[index].employees[slotIndex] = employee;

  //   setTrucks(tmp);
  // };

  return (
    <Provider store={store}>
      <AssignTable></AssignTable>
    </Provider>
  );
}

export default App;
