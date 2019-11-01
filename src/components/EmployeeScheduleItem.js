import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const EmployeeScheduleItem = ({ name, start, end, setEmployee }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: "Emp" },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        setEmployee(dropResult.index, { name, start, end });
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0.4 : 1;

  const ListItem = styled.li`
    border-radius: 3px;
    padding: 0.25rem;
    margin: 0.5rem;
    cursor: pointer;
    user-select: none;
    background: #c9d6df;
    color: #1e2022;
    opacity: ${opacity};
  `;

  return (
    <ListItem ref={drag}>
      <span>{name}</span>
      <div style={{ textAlign: "right", margin: "0" }}>
        <span style={{}}>{start + "-" + end}</span>
      </div>
    </ListItem>
  );
};

EmployeeScheduleItem.propTypes = {};

export default EmployeeScheduleItem;
