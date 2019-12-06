import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

const ViewTableDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Truck = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto 1fr;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  font-family: "consolas";
`;

const TruckNumber = styled.div`
  height: 100%;
  padding: 20px;
  font-weight: 600;
  font-size: 2rem;
  border-right: 1px solid black;
`;

const TruckLocation = styled.div`
  height: 100%;
  padding: 20px;
  font-weight: 400;
  font-size: 2rem;
  border-right: 1px solid black;
`;

const TruckEmployee = styled.div`
  height: 100%;
  padding: 20px;
  font-weight: 400;
  font-size: 2rem;
`;

const TruckInop = styled.div`
  height: 100%;
  padding: 20px;
  font-weight: 400;
  font-size: 2rem;
  color: red;
`;

const ViewTable = ({ trucks }) => {
  return (
    <ViewTableDiv>
      {trucks &&
        trucks.map(truck => {
          if (truck.status !== "INOP") {
            return (
              <Truck key={truck.id}>
                <TruckNumber>{truck.id}</TruckNumber>
                {truck.location && <TruckLocation>{truck.location}</TruckLocation>}
                {truck.operator && <TruckEmployee>{truck.operator.name}</TruckEmployee>}
              </Truck>
            );
          } else {
            return (
              <Truck key={truck.id}>
                <TruckNumber>{truck.id}</TruckNumber>
                <TruckInop>INOP</TruckInop>
              </Truck>
            );
          }
        })}
    </ViewTableDiv>
  );
};

ViewTable.propTypes = {
  trucks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  trucks: state.trucks.trucks
});

export default connect(mapStateToProps)(ViewTable);
