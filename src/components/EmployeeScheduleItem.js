import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const EmployeeScheduleItem = ({ name, start, end, handleEmployeeDrop, truck }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: "Emp" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleEmployeeDrop(dropResult.index, dropResult.name, { name, start, end, truck: dropResult.name });
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;

  const ListItem = styled.li`
    border-radius: 3px;
    margin: 0.5rem;
    cursor: pointer;
    user-select: none;
    background: #c9d6df;
    color: #1e2022;
    opacity: ${opacity};
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "name truck"
      "name sched";
    align-items: center;
  `;

  const NameLabel = styled.div`
    grid-area: name;
    vertical-align: center;
    padding: 0.5rem;
  `;

  const TruckLabel = styled.div`
    grid-area: truck;
    text-align: center;
    background-color: #71a95a;
    color: #f0f5f9;
    border-top-right-radius: 3px;
  `;

  const SchedLabel = styled.div`
    grid-area: sched;
    text-align: center;
    /* background-color: #71a95a;
    color: #f0f5f9; */
    border-bottom-right-radius: 3px;
  `;

  return (
    <ListItem ref={drag}>
      <NameLabel>{name}</NameLabel>
      <TruckLabel>{truck}</TruckLabel>
      <SchedLabel>{start + "-" + end}</SchedLabel>
    </ListItem>
  );
};

EmployeeScheduleItem.propTypes = {};

export default EmployeeScheduleItem;
