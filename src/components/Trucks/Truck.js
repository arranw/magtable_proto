import React, { useState } from "react";
import styled from "styled-components";
import EmpDrop from "./EmpDrop";

const TruckDiv = styled.div`
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
const Truck = ({ truck }) => {
  const { id, employees } = truck;

  return (
    <TruckDiv>
      <TruckNumber>{id}</TruckNumber>
      <Emps>
        <EmpDrop slot={0} truckNumber={id} assignedEmployee={employees[0]} />
        <EmpDrop slot={1} truckNumber={id} assignedEmployee={employees[1]} />
      </Emps>
    </TruckDiv>
  );
};

Truck.propTypes = {};

export default React.memo(Truck);
