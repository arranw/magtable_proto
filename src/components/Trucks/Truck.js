import React, { useState } from "react";
import styled from "styled-components";
import EmpDrop from "./EmpDrop";

const Truck = ({ truckNumber, employees, index }) => {
  const [empDrops] = useState(["emp1", "emp2"]);

  const Truck = styled.div`
    margin: 0.5rem 0;
    display: grid;
    grid-template-columns: auto 250px 100px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "trucknum emps shift1"
      "trucknum emps shift2";
  `;

  const TruckNumber = styled.div`
    grid-area: trucknum;
    padding: 10px;
    font-weight: 400;
    font-size: 2rem;
    background: #52616b;
    color: #f0f5f9;
  `;

  const Emps = styled.div`
    grid-area: emps;
    display: block;
  `;

  return (
    <Truck>
      <TruckNumber>{truckNumber}</TruckNumber>
      <Emps>
        {empDrops.map((empDrop, index) => (
          <EmpDrop key={index} index={index} truckNumber={truckNumber} assignedEmployee={employees[index]} />
        ))}
      </Emps>
    </Truck>
  );
};

Truck.propTypes = {};

export default Truck;
