import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DashboardDiv = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Card = styled.div`
  text-align: center;
  border-radius: 0;
  box-shadow: 0px 2px 4px #52616b;
  transition: 150ms ease-in-out;
  margin: 0 2rem;
  height: 100%;
  opacity: 0.95;
  padding-top: 4rem;
  background: #eee;
  :hover {
    a {
      text-decoration: none;
      color: #4ecca3;
    }
    box-shadow: 0px 2px 4px #4ecca3;
    opacity: 1;
  }
`;

const Icon = styled.i`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const CardLabel = styled.h3`
  border-top: 2px solid #33333333;
  padding-top: 1rem;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const Dashboard = () => {
  return (
    <DashboardDiv>
      <Link to="assign">
        <Card>
          <Icon className="fas fa-eye"></Icon>
          <CardLabel>View</CardLabel>
        </Card>
      </Link>
      <Link to="assign">
        <Card>
          <Icon className="fas fa-plus"></Icon>
          <CardLabel>Assign</CardLabel>
        </Card>
      </Link>
      <Link to="assign">
        <Card>
          <Icon className="fas fa-wrench"></Icon>
          <CardLabel>Snag</CardLabel>
        </Card>
      </Link>
      <Link to="assign">
        <Card>
          <Icon className="fas fa-truck"></Icon>
          <CardLabel>Trucks</CardLabel>
        </Card>
      </Link>
    </DashboardDiv>
  );
};
