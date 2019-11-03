import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const ListItem = styled.li`
  border-radius: 3px;
  margin: 0.5rem;
  cursor: pointer;
  user-select: none;
  background: #c9d6df;
  color: #1e2022;
  display: grid;
  padding: 0.5rem;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "name truck"
    "pos sched";
  align-items: center;
`;

const NameLabel = styled.div`
  grid-area: name;
  vertical-align: center;
`;

const TruckLabel = styled.div`
  grid-area: truck;
  text-align: center;
  border-top-right-radius: 3px;

  & > span {
    padding: 0 0.5rem;
    border-radius: 10px;
    background-color: #71a95a;
    color: #f0f5f9;
  }
`;

const PositionLabel = styled.div`
  grid-area: pos;
  vertical-align: center;
`;

const SchedLabel = styled.div`
  grid-area: sched;
  text-align: center;
  border-bottom-right-radius: 3px;
`;

const GreenIcon = styled.i`
  color: green;
  font-size: 10pt;
  padding: 3px;
`;

const QualifiedIcon = styled.i`
  color: darkorange;
  font-size: 15pt;
  padding: 3px;
`;

const EmployeeScheduleItem = ({ handleEmployeeDrop, employee }) => {
  const { name, position, start, end, truck, isGreen, isQualified } = employee;

  const [{ isDragging }, drag] = useDrag({
    item: { name, type: "Emp" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        const employee = {
          name,
          start,
          end,
          truck: dropResult.name
        };

        handleEmployeeDrop(dropResult.slot, dropResult.name, employee);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;
  console.log("render");

  return (
    <ListItem ref={drag}>
      <NameLabel>
        {!isQualified && <QualifiedIcon className="fas fa-exclamation"></QualifiedIcon>}
        {isGreen && <GreenIcon className="fas fa-circle"></GreenIcon>}
        {name}
      </NameLabel>
      <PositionLabel>{position}</PositionLabel>
      {truck && (
        <TruckLabel>
          <span>{truck}</span>
        </TruckLabel>
      )}
      <SchedLabel>{start + "-" + end}</SchedLabel>
    </ListItem>
  );
};

EmployeeScheduleItem.propTypes = {};

export default React.memo(EmployeeScheduleItem);
