import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import StaffSchedule from "../components/staffSchedule";
import Searchbar from "../components/Searchbar";
import search from "../assets/icons/Component 248.png";
import Filter from "../assets/icons/funnel.png";
import Tablist from "../components/Tablist";

const Payroll = () => {
  const [activeTab, setActiveTab] = useState("pay" | "staff");
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const text = "Payroll";
  // const sub = "Payroll"
  // const sub1 = "Staff Schedule"
  // const content2 =  <StaffSchedule/>
  return (
    <div>
      <Header />
      <Sidebar />
      <Title
        text={text}
        //   sub={sub}
        //   sub1={sub1}
        //   content2={content2}
      />

      <div className="page-tabBar">
        <div className="tab-buttons">
          <span className="tButton" onClick={() => changeTab("pay")}>
            Payroll
          </span>
          <span
            className={`${changeTab === "staff" && "actives"} tButton`}
            onClick={() => changeTab("staff")}
          >
            Staff Schedule
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
        {activeTab === "pay" && <div>payroll table</div>}
        {activeTab === "staff" && (
          <div>
            <StaffSchedule />
          </div>
        )}
      </div>
    </div>
  );
};

export default Payroll;

// className={`${index === tabs && "actives"} tab-item ${<hr/>}`}
// onClick={() => setTabs(index)}
