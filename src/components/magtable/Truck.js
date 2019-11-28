import React, { useState } from "react";
import styled from "styled-components";
import EmpDrop from "./EmpDrop";

const TruckDiv = styled.div`
  /* margin: 0.5rem 0; */
  display: grid;
  border-bottom: 1px solid #52616b;
  grid-template-columns: auto 75px 100px 350px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "trucknum opstatus location emps notes"
    "trucknum opstatus location emps notes";
  background: #c9d6df;
  color: #1e2022;
`;

const TruckNumber = styled.div`
  grid-area: trucknum;
  padding: 10px;
  font-weight: 400;
  font-size: 2rem;
`;

const Emps = styled.div`
  grid-area: emps;
  display: block;
`;

const LocationSelect = styled.select`
  grid-area: location;
  border: 0;
  text-align: center;
  font-size: 1.5rem;
  background: inherit;
  color: inherit;
  border-left: 1px solid #1e2022;
`;

const TruckOpStatus = styled.div`
  grid-area: opstatus;
  padding: 10px;
  margin: auto;
  font-weight: 600;
  font-size: 1.5rem;
  color: green;
`;

const TruckNotes = styled.textarea`
  grid-area: notes;
  border: 0;
  resize: none;
  background: inherit;
  color: inherit;
`;

const Truck = ({ truck }) => {
  const { id, employees } = truck;

  return (
    <TruckDiv>
      <TruckNumber>{id}</TruckNumber>
      <TruckOpStatus>GO</TruckOpStatus>
      <LocationSelect>
        <option selected></option>
        <option>EAST</option>
        <option>WEST</option>
      </LocationSelect>
      <Emps>
        <EmpDrop slot={0} truckNumber={id} assignedEmployee={employees[0]} />
        <EmpDrop slot={1} truckNumber={id} assignedEmployee={employees[1]} />
      </Emps>
      <TruckNotes></TruckNotes>
    </TruckDiv>
  );
};

Truck.propTypes = {};

export default React.memo(Truck);
