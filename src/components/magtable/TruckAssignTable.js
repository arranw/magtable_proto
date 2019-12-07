import React, { useCallback, useContext } from "react";
import { connect } from "react-redux";
import { DndProvider } from "react-dnd";
import styled from "styled-components";
import MultiBackend, { Preview } from "react-dnd-multi-backend";
import HTML5toTouch from "react-dnd-multi-backend/dist/esm/HTML5toTouch"; // or any other pipeline

import Truck from "./Truck";
import EmployeeScheduleItem from "./EmployeeScheduleItem";
import ScheduleDivider from "./ScheduleDivider";
import { setTruckEmployee } from "../../reducers/trucks";
import { removeFromSchedule } from "../../reducers/schedule";

const GeneratePreview = () => {
  const { style, item } = useContext(Preview.Context);
  return (
    <div style={{ ...style, backgroundColor: "#d9f6ff", width: "90%", padding: "8px", border: "1px solid #52616b" }}>
      {item.name}
    </div>
  );
};

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

const TruckList = styled.div`
  grid-area: trucks;
  border-top: 5px solid #52616b;
  overflow-x: auto;
`;

const ScheduleList = styled.div`
  grid-area: schedule;
  border-top: 5px solid #52616b;
  overflow-x: overlay;
  > div {
    border-bottom: 1px solid #1e2022;
  }
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

const AssignTable = ({
  schedule: { employees, startTimes, loading },
  trucks,
  setTruckEmployee,
  removeFromSchedule
}) => {
  const handleEmployeeDrop = useCallback(
    (slotIndex, truckNumber, employee) => {
      setTruckEmployee({ slotIndex, truckNumber, employee });
      removeFromSchedule({ id: employee.id });
    },
    [setTruckEmployee, removeFromSchedule]
  );

  let lastStartTime;

  return (
    <AssignTableDiv>
      <ScheduleHeader>Schedule</ScheduleHeader>
      <TrucksHeader>Table</TrucksHeader>
      <DndProvider backend={MultiBackend} options={HTML5toTouch}>
        {employees && (
          <ScheduleList>
            {/* <iframe title="w2w" src="https://whentowork.com/mob/logins.htm"></iframe> */}
            {employees &&
              employees.map(emp => {
                let header;
                if (emp.start !== lastStartTime) {
                  lastStartTime = emp.start;
                  var count = employees.reduce((acc, cur) => (cur.start === lastStartTime ? ++acc : acc), 0);
                  header = <ScheduleDivider time={emp.start} count={count}></ScheduleDivider>;
                }
                return (
                  <React.Fragment key={emp.id}>
                    {header}
                    <EmployeeScheduleItem employee={emp} handleEmployeeDrop={handleEmployeeDrop}></EmployeeScheduleItem>
                  </React.Fragment>
                );
              })}
          </ScheduleList>
        )}
        <TruckList>
          {trucks.map((truck, index) => {
            return <Truck key={truck.id} index={index} truck={truck} handleEmployeeDrop={handleEmployeeDrop}></Truck>;
          })}
        </TruckList>
        <Preview>
          <GeneratePreview />
        </Preview>
      </DndProvider>
    </AssignTableDiv>
  );
};

const mapStateToProps = state => ({
  trucks: state.trucks.trucks,
  schedule: state.schedule
});

export default connect(mapStateToProps, { setTruckEmployee, removeFromSchedule })(React.memo(AssignTable));
