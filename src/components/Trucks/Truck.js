import React, { useState } from "react";
import styled from "styled-components";
import EmpDrop from "./EmpDrop";

const TruckDiv = styled.div`
  margin: 0.5rem 0;
  display: grid;
  outline: 1px solid #52616b;
  grid-template-columns: auto 100px 350px 100px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "trucknum location emps shift1"
    "trucknum location emps shift2";
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

const LocationSelect = styled.select`
  grid-area: location;
  background: #c9d6df;
  outline: 1px solid #52616b;
  outline-offset: -1px;
  text-align: center;
  font-size: 1.5rem;
`;

const Truck = ({ truck }) => {
  const { id, employees } = truck;

  return (
    <TruckDiv>
      <TruckNumber>{id}</TruckNumber>
      <LocationSelect>
        <option selected></option>
        <option>EAST</option>
        <option>WEST</option>
      </LocationSelect>
      <Emps>
        <EmpDrop slot={0} truckNumber={id} assignedEmployee={employees[0]} />
        <EmpDrop slot={1} truckNumber={id} assignedEmployee={employees[1]} />
      </Emps>
    </TruckDiv>
  );
};

Truck.propTypes = {};

export default React.memo(Truck);
