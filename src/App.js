import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import EmployeeScheduleItem from "./components/EmployeeScheduleItem";
import ScheduleDivider from "./components/ScheduleDivider";
import Truck from "./components/Truck";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import schedule from "./util/scheduleParser";

function App() {
  const [shifts, setShifts] = useState(null);
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

  useEffect(() => {
    const fetch = async () => {
      const shifts = await schedule.getSched();
      setShifts(shifts);
    };
    fetch();
  }, []);

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
          {shifts &&
            shifts.map(shift => {
              return (
                <>
                  <ScheduleDivider time={shift.start}></ScheduleDivider>
                  {shift.employees.map(employee => (
                    <EmployeeScheduleItem
                      name={employee.name}
                      start={employee.start}
                      end={employee.end}
                      setEmployee={setEmployee}
                    ></EmployeeScheduleItem>
                  ))}
                </>
              );
            })}
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
