import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ScheduleDivider from "./../ScheduleDivider";
import EmployeeScheduleItem from "./../EmployeeScheduleItem";
import Truck from "./../Trucks/Truck";
import { setSchedule } from "../../reducers/schedule";
import scheduleBroker from "../../util/scheduleBroker";
import { setTruckEmployee } from "../../reducers/trucks";

const AssignTable = ({ schedule: { schedule, loading }, trucks, setSchedule, setTruckEmployee }) => {
  useEffect(() => {
    async function fetch() {
      const shifts = await scheduleBroker.getSched();
      setSchedule(shifts);
    }
    fetch();
  }, [setSchedule]);

  const AssignTable = styled.div`
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

  const handleEmployeeDrop = (slotIndex, truckNumber, employee) => {
    // console.log(slotIndex, truckNumber, employee);
    setTruckEmployee({ slotIndex, truckNumber, employee });
  };

  return (
    <AssignTable>
      <DndProvider backend={HTML5Backend}>
        {schedule && (
          <ScheduleList>
            {/* <ScheduleDivider time="0400"></ScheduleDivider>
            <EmployeeScheduleItem
              name="test"
              start="0400"
              end="0800"
              truck=""
              setEmployee={setEmployee}
            ></EmployeeScheduleItem> */}
            {!loading &&
              schedule.map((shift, i) => (
                <>
                  <ScheduleDivider key={i} time={shift.start}></ScheduleDivider>
                  {shift.employees.map((employee, j) => (
                    <EmployeeScheduleItem
                      key={i + ":" + j}
                      name={employee.name}
                      start={employee.start}
                      end={employee.end}
                      truck={employee.truck}
                      handleEmployeeDrop={handleEmployeeDrop}
                    ></EmployeeScheduleItem>
                  ))}
                </>
              ))}
          </ScheduleList>
        )}
        <TruckList>
          <li>
            {trucks.map((truck, index) => {
              return <Truck index={index} truckNumber={truck.id} employees={truck.employees}></Truck>;
            })}
          </li>
        </TruckList>
      </DndProvider>
    </AssignTable>
  );
};

const mapStateToProps = state => ({
  trucks: state.trucks.trucks,
  schedule: state.schedule
});

export default connect(
  mapStateToProps,
  { setSchedule, setTruckEmployee }
)(AssignTable);
