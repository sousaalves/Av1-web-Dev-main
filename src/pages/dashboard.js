import React from "react";
import './dashboard.css';
import Ranking from "../components/ranking";
const Dashboard = () => {

  return (
    <>
      <div className="dashboard">
        <Ranking />
      </div>
    </>
  );
};

export default Dashboard;