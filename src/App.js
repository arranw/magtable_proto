import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import EmployeeScheduleItem from "./components/EmployeeScheduleItem";
import ScheduleDivider from "./components/ScheduleDivider";
import Truck from "./components/Truck";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

function App() {
  const [trucks, setTrucks] = useState([
    {
      id: 25,
      employee: {}
    },
    {
      id: 26,
      employee: {}
    },
    {
      id: 27,
      employee: {}
    },
    {
      id: 28,
      employee: {}
    }
  ]);

  const setEmployee = (index, employee) => {
    let tmp = [...trucks];
    tmp[index].employee = employee;
    setTrucks(tmp);
  };

  const App = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    grid-template-rows: 100vh;
    grid-template-areas: "schedule main";
  `;

  const TruckList = styled.ul`
    grid-area: main;
    list-style: none;
    padding: 0 10px;
    margin: 0;
  `;

  const ScheduleList = styled.ul`
    grid-area: schedule;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow-x: overlay;
  `;

  return (
    <App>
      <DndProvider backend={HTML5Backend}>
        <ScheduleList>
          <ScheduleDivider time="0400"></ScheduleDivider>
          <EmployeeScheduleItem
            name="Arran Woodruff"
            start="0400"
            end="1600"
            setEmployee={setEmployee}
          ></EmployeeScheduleItem>
          <EmployeeScheduleItem name="John Doe" start="0400" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Alex Johnson" start="0400" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Rodrigo Jones" start="0400" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Peter Plum" start="0500" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Bobby Tables" start="0500" end="1600"></EmployeeScheduleItem>
          <ScheduleDivider time="0500"></ScheduleDivider>
          <EmployeeScheduleItem name="Steven Wong" start="0500" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="David Ward" start="0500" end="1600"></EmployeeScheduleItem>
          <ScheduleDivider time="0600"></ScheduleDivider>
          <EmployeeScheduleItem name="Arran Woodruff" start="0600" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Arran Woodruff" start="0600" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Arran Woodruff" start="0600" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Arran Woodruff" start="0600" end="1600"></EmployeeScheduleItem>
          <ScheduleDivider time="1200"></ScheduleDivider>
          <EmployeeScheduleItem name="Arran Woodruff" start="1200" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Arran Woodruff" start="1200" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Arran Woodruff" start="1200" end="1600"></EmployeeScheduleItem>
          <EmployeeScheduleItem name="Arran Woodruff" start="1200" end="1600"></EmployeeScheduleItem>
        </ScheduleList>
        <TruckList>
          <li>
            {trucks.map((truck, index) => (
              <Truck index={index} truckNumber={truck.id} assignedEmployee={truck.employee}></Truck>
            ))}
          </li>
        </TruckList>
      </DndProvider>
    </App>
  );
}

export default App;
