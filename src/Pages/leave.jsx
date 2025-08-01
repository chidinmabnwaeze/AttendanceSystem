import React, { useState } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/leave.css";
import Filter from "../assets/icons/funnel.png";
import LeaveForm from "../components/form";
import Table from "../components/Table";
import LeaveTable from "../components/LeaveTable";

const leave = () => {
  const [activeTab, setActiveTab] = useState("apply");
  const [leaveData, setLeaveData] = useState([]);
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const text = "Leave";

  const handleSubmit = (formData) => {
    setLeaveData((prev) => [...prev, formData]);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <Title text={text} />

      <div className="page-tabBar">
        <div className="tab-buttons">
          <span
            className={`${activeTab === "apply" ? "actives" : "tButton"}`}
            onClick={() => changeTab("apply")}
          >
            Apply
          </span>
          <span
            className={`${activeTab === "onLeave" ? "actives" : "tButton"}`}
            onClick={() => changeTab("onLeave")}
          >
            On Leave
          </span>
        </div>

        <div className="right">
          <button className="filterButton">
            <img className="filter" src={Filter} alt="" />
          </button>
          <input
            className="input"
            type="searchbox"
            id="input"
            placeholder="Card ID, Role or Staff name"
          />
        </div>
      </div>
      <br />
      <div className="content">
        {activeTab === "apply" && (
          <div>
            <LeaveForm onSubmit={handleSubmit} />
          </div>
        )}
        {activeTab === "onLeave" && (
          <div>
            <LeaveTable leaveData={leaveData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default leave;
