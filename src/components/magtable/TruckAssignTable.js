import React, { useCallback } from "react";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import styled from "styled-components";
import HTML5Backend from "react-dnd-html5-backend";
import TouchBackend from "react-dnd-touch-backend";
import MultiBackend from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch";

import Truck from "./Truck";
import EmployeeScheduleItem from "./EmployeeScheduleItem";
import ScheduleDivider from "./ScheduleDivider";
import { setTruckEmployee } from "../../reducers/trucks";
import { setEmployeeTruck } from "../../reducers/schedule";

const AssignTableDiv = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 300px auto;
  grid-template-rows: auto 89vh;
  grid-template-areas:
    "scheduleHeader trucksHeader"
    "schedule trucks";
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: 45vh 45vh;
    grid-template-areas:
      "schedule"
      "trucks";
  }
`;

const TruckList = styled.ul`
  grid-area: trucks;
  border-top: 5px solid #52616b;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow-x: auto;
`;

const ScheduleList = styled.ul`
  grid-area: schedule;
  border-top: 5px solid #52616b;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-x: overlay;
`;

const ScheduleHeader = styled.h2`
  grid-area: scheduleHeader;
  text-align: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

const TrucksHeader = styled.h2`
  grid-area: trucksHeader;
  text-align: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

const AssignTable = ({ schedule: { schedule, loading }, trucks, setTruckEmployee, setEmployeeTruck }) => {
  const handleEmployeeDrop = useCallback(
    (slotIndex, truckNumber, employee) => {
      setTruckEmployee({ slotIndex, truckNumber, employee });
      setEmployeeTruck({ employee, truckNumber });
    },
    [setTruckEmployee, setEmployeeTruck]
  );

  return (
    <AssignTableDiv>
      <ScheduleHeader>Schedule</ScheduleHeader>
      <TrucksHeader>Table</TrucksHeader>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        {!loading && (
          <ScheduleList>
            {/* <iframe title="w2w" src="https://whentowork.com/mob/logins.htm"></iframe> */}
            {schedule.map(scheduleSection => (
              <React.Fragment key={scheduleSection.scheduleSection.id}>
                {scheduleSection.employees.length > 0 && (
                  <ScheduleDivider
                    key={scheduleSection.scheduleSection.start}
                    time={scheduleSection.scheduleSection.start}
                    count={scheduleSection.employees.length}
                  />
                )}
                {scheduleSection.employees.map(employee => (
                  <EmployeeScheduleItem
                    key={employee.id}
                    employee={employee}
                    handleEmployeeDrop={handleEmployeeDrop}
                  ></EmployeeScheduleItem>
                ))}
              </React.Fragment>
            ))}
          </ScheduleList>
        )}

        <TruckList>
          <li>
            {trucks.map((truck, index) => {
              return <Truck key={truck.id} index={index} truck={truck}></Truck>;
            })}
          </li>
        </TruckList>
      </DndProvider>
    </AssignTableDiv>
  );
};

const mapStateToProps = state => ({
  trucks: state.trucks.trucks,
  schedule: state.schedule
});

export default connect(mapStateToProps, { setTruckEmployee, setEmployeeTruck })(React.memo(AssignTable));
