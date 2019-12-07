import React from "react";
import styled from "styled-components";

const ListDivider = styled.div`
  padding: 0.25rem;
  /* margin-top: 0.5rem; */
  background: #52616b;
  color: #fff;
  font-weight: 400;
  font-size: 20px;
`;

const ScheduleDivider = ({ time, count }) => {
  return (
    <ListDivider>
      <span style={{ paddingLeft: "10px", textAlign: "left" }}>{time}</span>
      <span style={{ paddingRight: "10px", float: "right" }}>{count}</span>
    </ListDivider>
  );
};

ScheduleDivider.propTypes = {};

export default React.memo(ScheduleDivider);
