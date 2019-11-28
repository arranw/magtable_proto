import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <i className="fas fa-plus"></i>
        </div>
        <Link to="assign">
          <div className="card-footer">Assign</div>
        </Link>
      </div>
    </div>
  );
};
