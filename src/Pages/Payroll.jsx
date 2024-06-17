import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import StaffSchedule from "../components/staffSchedule";
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
      <div className="div">
        <span onClick={() => changeTab("pay")}>Payroll</span>
        <span onClick={() => changeTab("staff")}>Staff Schedule</span>
      </div>
      <br />
      {activeTab==="pay" && 
        <div>
            payroll table
        </div>
      }
      {activeTab === "staff" &&
        <div>
           <StaffSchedule/>
        </div>
      }
    </div>
  );
};

export default Payroll;
