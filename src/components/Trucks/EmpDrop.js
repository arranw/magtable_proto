import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

let borderColor;
let bgColor;

const EmployeeDrop = styled.span`
  width: 100%;
  outline-offset: -1px;
  font-weight: 400;
  height: 50%;
  /* border-right: 1px solid #52616b; */
  outline: 1px solid #52616b;
  text-align: center;
  background: #c9d6df;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-auto-columns: auto;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    `
    background: #f0f5f9;
    outline: 2px solid #4ecca3;
    outline-offset: -1px;
  `}
`;

const EmpDrop = ({ truckNumber, slot, assignedEmployee }) => {
  const { name, start, end } = assignedEmployee;
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Emp",
    drop: () => ({ name: truckNumber, slot }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;

  return (
    <EmployeeDrop isActive={isActive} ref={drop}>
      {name && <span>{name}</span>}
      {start && end && <span>{start + "-" + end}</span>}
    </EmployeeDrop>
  );
};

EmpDrop.propTypes = {};

export default React.memo(EmpDrop);
