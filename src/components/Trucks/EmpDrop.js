import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const EmpDrop = ({ truckNumber, index, assignedEmployee }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Emp",
    drop: () => ({ name: truckNumber, index }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;

  let bgColor = isActive ? "#f0f5f9" : "#c9d6df";
  let borderColor = isActive ? "#4ecca3" : "#52616b";

  const EmployeeDrop = styled.span`
    display: flex;
    width: 100%;
    background: ${bgColor};
    outline: 1px solid ${borderColor};
    outline-offset: -1px;
    font-weight: 400;
    height: 50%;
    border-right: 1px solid #52616b;
    text-align: center;
  `;

  return <EmployeeDrop ref={drop}>{assignedEmployee && assignedEmployee.name}</EmployeeDrop>;
};

EmpDrop.propTypes = {};

export default EmpDrop;
