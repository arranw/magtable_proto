import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDrop } from "react-dnd";

const Truck = ({ truckNumber, assignedEmployee, index }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Emp",
    drop: () => ({ name: "Truck", index }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = canDrop && isOver;

  let borderColor = isActive ? "#4ecca3" : "#f0f5f9";
  let bgColor = isActive ? "#f0f5f9" : "#c9d6df";

  const Truck = styled.div`
    background: ${bgColor};
    border: 1px solid ${borderColor};
    margin: 0.5rem 0;
    display: flex;
  `;

  const TruckNumber = styled.div`
    padding: 10px;
    font-weight: 400;
    font-size: 2rem;
    border-right: 1px solid #52616b;
    background: #52616b;
    color: #f0f5f9;
  `;

  const LargeLabel = styled.div`
    padding: 10px;
    font-weight: 400;
    font-size: 2rem;
    border-right: 1px solid #52616b;
  `;

  return (
    <Truck ref={drop}>
      <TruckNumber>{truckNumber}</TruckNumber>
      {assignedEmployee.name && <LargeLabel>{assignedEmployee.name}</LargeLabel>}
    </Truck>
  );
};

Truck.propTypes = {};

export default Truck;
