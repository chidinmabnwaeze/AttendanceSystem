import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Table from "../components/Table";
import searchIcon from "../assets/icons/Component 248.png";
import Filter from "../assets/icons/funnel.png";
import "../styles/timesheet.css";
import Tablist from "../components/Tablist";
import Table2 from "../components/Table2";
import Off from "../components/Table4";
import userpic from "../assets/images/profile.png";
import { useState } from "react";

const Timesheet = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const changeTab = (tab) => {
    setActiveTab(tab);
  };
  const text = "Timesheet";
  // const sub ="Clocked in";
  // const sub1 ="Clocked late";
  // const sub2 = "Off Today";
  // const content = <Table/>

  const userTable = [
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Clocked in",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Clocked in",
      date: "2024-06-09",
    },

    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Backend developer",
      status: "Clocked in",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Off today",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "UI/UX Designer",
      status: "Clocked in",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Clocked in",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Clocked late",
      date: "2024-06-09",
    },
  ];

  const filteredSearch = userTable.filter((tables) =>
    Object.values(tables).join(" ").toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredSearch);

  const statusFilter = userTable.filter((status) =>
    `${status.status}`.toLowerCase().includes()
  );

  console.log(statusFilter);
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
          <span>{/* map tabs name together and filter active tabs */}</span>
          <span
            className={`${activeTab === "All" ? "actives" : "tButton"}`}
            onClick={() => changeTab("All")}
          >
            All
          </span>
          <span
            className={`${activeTab === "Clocked In" ? "actives" : "tButton"}`}
            onClick={() => changeTab("Clocked In")}
          >
            Clocked in
          </span>
          <span
            className={`${
              activeTab === "Clocked Late" ? "actives" : "tButton"
            }`}
            onClick={() => changeTab("Clocked Late")}
          >
            Clocked Late
          </span>
          <span
            className={`${activeTab === "Off Today" ? "actives" : "tButton"}`}
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Card ID, Role or Staff name"
          />
          <img className="search-icon" id="input" src={searchIcon} alt="" />
        </div>
      </div>
      <br />
      <div className="content">
        {activeTab === "All" && (
          <div>
            <Table userTable={filteredSearch} statusFilter={statusFilter} />
          </div>
        )}
        {activeTab === "Clocked Late" && (
          <div>
            <Table2 />
          </div>
        )}
        {activeTab === "Off Today" && (
          <div>
            <Off />
          </div>
        )}
      </div>
    </div>
  );
};

export default Timesheet;
