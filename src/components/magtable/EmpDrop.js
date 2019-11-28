import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const EmployeeDrop = styled.span`
  outline-offset: -1px;
  height: 50%;
  text-align: center;
  background: #c9d6df;

  display: grid;
  grid-template-columns: 45% 45% 10%;
  align-items: center;

  ${({ isActive }) =>
    isActive &&
    `
    background: #f0f5f9;
    outline: 2px solid #4ecca3;
    outline-offset: -1px;
  `}

  &:hover {
    .delete-icon {
      display: block;
    }
  }
`;

const DeleteIcon = styled.i`
  color: darkred;
  cursor: pointer;
  float: right;
  display: none;

  &:hover {
    color: red;
  }
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
      {name && <DeleteIcon className="delete-icon fas fa-times"></DeleteIcon>}
    </EmployeeDrop>
  );
};

EmpDrop.propTypes = {};

export default React.memo(EmpDrop);
