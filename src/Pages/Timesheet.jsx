import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Table from "../components/Table";
import "../styles/timesheet.css";
import Tablist from "../components/Tablist";

const Timesheet = () => {
  const text = "Timesheet";
  const sub ="Clocked in";
  const sub1 ="Clocked late";
  const sub2 = "Off Today";
  const content = <Table/>

  return (
    <div>
      <Header />
      <Sidebar />
     
      <Title text={text} 
      sub={sub}
      sub1={sub1}
      sub2={sub2}
      content ={content}
      />
   
      
    </div>
  );
};

export default Timesheet;
