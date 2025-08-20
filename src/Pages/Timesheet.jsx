import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Table from "../components/Table";
import searchIcon from "../assets/icons/Component 248.png";
import Filter from "../assets/icons/funnel.png";
import "../styles/timesheet.css";
import userpic from "../assets/images/profile.png";
import { useState, useEffect} from "react";
import { useUser } from "../components/userContext";

const Timesheet = () => {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  // const changeTab = (tab) => {
  //   setActiveTab(tab);
  // };
  const text = "Timesheet";
  const { userTable } = useUser();

  const filteredSearch = userTable.filter((tables) => {
    //fetching two queries , 1 to track search
    const matchSearch = Object.values(tables)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase());

    //2. to filter active tab based on status
    const matchTab =
      activeTab === "All" ||
      tables.status.toLowerCase() === activeTab.toLowerCase();

    return matchSearch && matchTab;
  });

//   const [staff, setStaff ] = useState([]);
  
//   useEffect(()=>{
//   try{
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => setStaff(data))
// }catch(error){
//   console.error("error:", error)
// }
// // console.log(staff)
//   },[])

  return (
    <div>
      <Header />
      <Sidebar />
      <Title text={text} />

      <div className="page-tabBar">
        <div className="tab-buttons">
          {/* map tabs name together and filter active tabs */}
          {["All", "Clocked In", "Clocked Late", "Off Today"].map((tab) => (
            <span
              key={tab}
              className={`${activeTab === tab ? "actives" : "tButton"}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
          {/* <span
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
         */}
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
        <div>
          <Table userTable={filteredSearch} />
        </div>
      </div>
    </div>
  );
};

export default Timesheet;
