import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
import EmployeeScheduleItem from "./EmployeeScheduleItem";

const EmployeeDrop = styled.div`
  text-align: center;
  background: #c9d6df;
  height: 100%;

  display: block;

  ${({ isActive }) =>
    isActive &&
    `
    background: #e0e5e9;
  `}

  &:hover {
    .delete-icon {
      display: block;
    }
  }
`;

const EmpDrop = ({ truckNumber, slot, operator, handleEmployeeDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Emp",
    drop: () => ({ name: truckNumber, slot }),
    canDrop: () => !operator,
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;

  return (
    <EmployeeDrop isActive={isActive} ref={drop}>
      {operator && (
        <EmployeeScheduleItem handleEmployeeDrop={handleEmployeeDrop} employee={operator}></EmployeeScheduleItem>
      )}
    </EmployeeDrop>
  );
};

EmpDrop.propTypes = {};

export default React.memo(EmpDrop);
