import React, { useState } from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/leave.css";
import search from "../assets/icons/Component 248.png";
import Filter from "../assets/icons/funnel.png";
import Form from "../components/form";
import Table from "../components/Table";
import LeaveTable from "../components/Table3"

const leave = () => {
  const [activeTab, setActiveTab] = useState("apply");
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const text = "Leave";
  // const apply ="Apply"
  // const onLeave = "On Leave"
  return (
    <div>
      <Header />
      <Sidebar />
      <Title
        text={text}
        //  sub={apply}
        // sub1 ={onLeave}
      />

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
          <img className="search-icon" id="input" src={search} alt="" />
        </div>
      </div>
      <br />
      <div className="content">
        {activeTab === "apply" && <div><Form/></div>}
        {activeTab === "onLeave" && (
          <div>
            <LeaveTable />
           
          </div>
        )}
      </div>
    </div>
  );
};

export default leave;
