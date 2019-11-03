import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import ScheduleDivider from "../ScheduleDivider";
import EmployeeScheduleItem from "../EmployeeScheduleItem";
import Truck from "../Trucks/Truck";
import { setSchedule } from "../../reducers/schedule";
import scheduleBroker from "../../util/scheduleBroker";
import { setTruckEmployee } from "../../reducers/trucks";
import { setEmployeeTruck } from "../../reducers/schedule";

const AssignTableDiv = styled.div`
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

const AssignTable = ({ schedule: { schedule, loading }, trucks, setSchedule, setTruckEmployee, setEmployeeTruck }) => {
  useEffect(() => {
    async function fetch() {
      const shifts = await scheduleBroker.getSched(["Technician", "OJT", "Bay Lead"]);
      setSchedule(shifts);
    }
    fetch();
  }, [setSchedule]);

  const handleEmployeeDrop = useCallback(
    (slotIndex, truckNumber, employee) => {
      console.log(slotIndex, truckNumber, employee);

      var start = Date.now();
      setTruckEmployee({ slotIndex, truckNumber, employee });
      console.log(Date.now() - start);
      setEmployeeTruck({ employee, truckNumber });
      console.log(Date.now() - start);
    },
    [setTruckEmployee, setEmployeeTruck]
  );

  return (
    <AssignTableDiv>
      <DndProvider backend={HTML5Backend}>
        {!loading && (
          <ScheduleList>
            {schedule.map(scheduleSection => (
              <React.Fragment key={scheduleSection.scheduleSection.id}>
                {scheduleSection.employees.length > 0 && (
                  <ScheduleDivider
                    key={scheduleSection.scheduleSection.start}
                    time={scheduleSection.scheduleSection.start}
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

export default connect(
  mapStateToProps,
  { setSchedule, setTruckEmployee, setEmployeeTruck }
)(React.memo(AssignTable));
