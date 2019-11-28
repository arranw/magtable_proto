import React from "react";
import "./App.css";

import { store } from "./reducers/configureStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TruckAssignTable from "./components/schedule/TruckAssignTable";
import Header from "./components/layout/Header";
import { Dashboard } from "./components/layout/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/assign" component={TruckAssignTable}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
