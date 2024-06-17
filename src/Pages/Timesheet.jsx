import React  from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Table from "../components/Table";
import search from "../assets/icons/Component 248.png";
import Filter from "../assets/icons/funnel.png";
import "../styles/timesheet.css";
import Tablist from "../components/Tablist";
import { useState } from "react";

const Timesheet = () => {
  const [activeTab, setActiveTab] = useState("Clocked In" | "Clocked late" | "Off Today");
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const text = "Timesheet";
  // const sub ="Clocked in";
  // const sub1 ="Clocked late";
  // const sub2 = "Off Today";
  // const content = <Table/>

  return (
    <div>
      <Header />
      <Sidebar />

      <Title
        text={text}
        // sub={sub}
        // sub1={sub1}
        // sub2={sub2}
        // content ={content}
      />
      <div className="page-tabBar">
        <div className="tab-buttons">
          <span className={`${activeTab ==="Clocked In" ? "actives" : "tButton"}`} onClick={() => changeTab("Clocked In")}>
           Clocked in
          </span>
          <span
            className={`${activeTab ==="Clocked Late" ? "actives" : "tButton"}`}
            onClick={() => changeTab("Clocked Late")}
          >
          Clocked Late
          </span>
          <span
            className= {`${activeTab ==="Off Today" ? "actives" : "tButton"}`}
            onClick={() => changeTab("Off Today")}
          >
          Off Today
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
        {activeTab === "Clocked In" && <div>payroll table</div>}
        {activeTab === "Clocked Late" && (
          <div>
            <Table />
          </div>
        )}
        {activeTab === "Off Today" && <div>payroll table</div>}
      </div>
     
    </div>
  );
};

export default Timesheet;
