import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import IntroBar from "../components/IntroBar";
import "../styles/dashboard.css";
import usersIcon from "../assets/icons/fa_users.svg";

const Dashboard = () => {
  const count = [
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: 100,
    },
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: 100,
    },
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: 100,
    },
    {
      title: "No of Total staff",
      img: usersIcon,
      staffCount: 100,
    },
  ];

  return (
    <div className="hero">
      <Header />
      <Sidebar />
      <IntroBar />

      <div className="card-count">
        {count.map((countCard, index) => (
          <div className="dashboardCard">
            <div className="box" key={index}>
              <div className="box-img">
                <img src={countCard.img} alt="" />
              </div>
              <div className="box-number">
                <p>{countCard.title}</p>
                <p className="number">{countCard.staffCount}</p>
              </div>
            </div>
          </div>
        ))}

        <section>
          <div className="pieChart"></div>
          <div className="lineChart"></div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
