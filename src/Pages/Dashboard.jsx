import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import IntroBar from "../components/IntroBar";
import "../styles/dashboard.css";
import usersIcon from "../assets/icons/fa_users.svg";

const Dashboard = () => {
  const [count, setCount] = useState([
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: 100,
    },
  ]);

  return (
    <div className="hero">
      <Header />
      <Sidebar />
      <IntroBar />

      <div className="card-count">
        {count.map((countCard, index) => {
          <div className="dashboardCard">
            <div className="box" key={index}>
              <div className="box-title">
                <p>{countCard.title}</p>
              </div>
              <div className="box-number">
                <img src={countCard.img} alt="" />
                <p className="number">{countCard.staffCount}</p>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
