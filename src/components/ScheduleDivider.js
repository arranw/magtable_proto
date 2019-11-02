import React from "react";
import styled from "styled-components";

const ScheduleDivider = ({ time }) => {
  const ListDivider = styled.li`
    padding: 0.25rem;
    /* margin-top: 0.5rem; */
    text-align: center;
    background: #52616b;
    color: #fff;
    font-weight: 400;
    font-size: 20px;
  `;

  return <ListDivider>{time}</ListDivider>;
};

ScheduleDivider.propTypes = {};

export default ScheduleDivider;
