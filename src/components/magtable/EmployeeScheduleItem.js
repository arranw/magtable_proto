import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const Employee = styled.div`
  /* border-radius: 3px; */
  /* margin: 0.5rem; */
  cursor: pointer;
  user-select: none;
  background: #c9d6df;
  color: #1e2022;
  display: grid;
  padding: 0.5rem;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "name ."
    "pos sched";

  ${({ isDragging }) => isDragging && `opacity: 0.4; outline: 1px solid #4ecca3;`}
  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas: "name";
  }
`;

const NameLabel = styled.div`
  grid-area: name;
  vertical-align: center;
`;

const PositionLabel = styled.div`
  grid-area: pos;
  vertical-align: center;
  @media (max-width: 600px) {
    display: none;
  }
`;

const SchedLabel = styled.div`
  grid-area: sched;
  text-align: center;
  border-bottom-right-radius: 3px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const GreenIcon = styled.i`
  color: green;
  font-size: 10pt;
  padding: 3px;
`;

// const QualifiedIcon = styled.i`
//   color: darkorange;
//   font-size: 15pt;
//   padding: 3px;
// `;

const EmployeeScheduleItem = ({ handleEmployeeDrop, employee }) => {
  const { name, position, start, end, isGreen } = employee;

  const [{ isDragging }, drag] = useDrag({
    item: { name, type: "Emp" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        handleEmployeeDrop(dropResult.slot, dropResult.name, employee);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  return (
    <Employee ref={drag} isDragging={isDragging}>
      <NameLabel>
        {isGreen && <GreenIcon className="fas fa-circle"></GreenIcon>}
        {name}
      </NameLabel>
      <PositionLabel>{position}</PositionLabel>
      <SchedLabel>{start + "-" + end}</SchedLabel>
    </Employee>
  );
};

EmployeeScheduleItem.propTypes = {};

export default React.memo(EmployeeScheduleItem);
