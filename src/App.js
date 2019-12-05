import React, { useEffect } from "react";
import "./App.css";

import { store } from "./reducers/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TruckAssignTable from "./components/magtable/TruckAssignTable";
import Header from "./components/layout/Header";
import { Dashboard } from "./components/layout/Dashboard";
import scheduleBroker from "./util/scheduleBroker";
import { setSchedule } from "./reducers/schedule";
import ViewTableDiv from "./components/magtable/ViewTable";

function App() {
  useEffect(() => {
    async function fetch() {
      const shifts = await scheduleBroker.getSched(["Technician", "OJT", "Bay Lead"]);
      store.dispatch(setSchedule(shifts));
    }
    fetch();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/table/assign" component={TruckAssignTable}></Route>
          <Route exact path="/table/view" component={ViewTableDiv}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
