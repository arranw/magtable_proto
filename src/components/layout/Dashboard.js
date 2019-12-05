import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TruckPic from "../../pics/trucks.jpg";
import AssignPic from "../../pics/assign.jpg";
import AssignPic2 from "../../pics/assign2.jpg";
import SnagPic from "../../pics/snag.jpg";

const DashboardDiv = styled.div`
  a {
    color: #333;
  }
`;

const Card = styled.div`
  border-radius: 0;
  transition: 300ms ease-in-out;
  height: 100px;
  height: 250px;

  width: 100%;
  background: #ccc;
  box-shadow: inset 0 -4px 3px -3px #52616b;
  overflow: hidden;

  img {
    margin-top: -200%;
    opacity: 0;
    width: 100%;
    height: auto;
    margin-top: -50px;
    opacity: 0;
    transition: 300ms ease-in-out;
    z-index: -1;
  }
  :hover {
    height: 250px;
    img {
      margin-top: 0;
      opacity: 1;
    }
  }
`;

const CardLabel = styled.h1`
  z-index: 1;
  background: #ccc;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0.5rem;
  transition: 0.1s ease-in-out;
  text-align: center;
  position: absolute;
  width: 200px;
  left: calc(50% - 100px);
`;

export const Dashboard = () => {
  return (
    <DashboardDiv>
      <Link to="/table/view">
        <Card>
          <CardLabel>
            View <i className="fas fa-eye"></i>
          </CardLabel>
          <img alt="" src={AssignPic}></img>
        </Card>
      </Link>
      <Link to="/table/assign">
        <Card>
          <CardLabel>
            Assign <i className="fas fa-plus"></i>
          </CardLabel>
          <img alt="" src={AssignPic2}></img>
        </Card>
      </Link>
      <Link to="/snag">
        <Card>
          <CardLabel>
            Snag <i className="fas fa-wrench"></i>
          </CardLabel>
          <img alt="" src={SnagPic}></img>
        </Card>
      </Link>
      <Link to="assign">
        <Card>
          <CardLabel>
            Trucks <i className="fas fa-truck"></i>
          </CardLabel>
          <img alt="" src={TruckPic}></img>
        </Card>
      </Link>
    </DashboardDiv>
  );
};
