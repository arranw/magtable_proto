import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const EmployeeDrop = styled.span`
  display: flex;
  width: 100%;
  outline-offset: -1px;
  font-weight: 400;
  height: 50%;
  border-right: 1px solid #52616b;
  text-align: center;
`;

const EmpDrop = ({ truckNumber, slot, assignedEmployee }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Emp",
    drop: () => ({ name: truckNumber, slot }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;

  let bgColor = isActive ? "#f0f5f9" : "#c9d6df";
  let borderColor = isActive ? "#4ecca3" : "#52616b";

  return <EmployeeDrop ref={drop}>{assignedEmployee && assignedEmployee.name}</EmployeeDrop>;
};

EmpDrop.propTypes = {};

export default React.memo(EmpDrop);
