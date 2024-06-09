import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import Table from "../components/Table";
import "../styles/timesheet.css";

const Timesheet = () => {
  const text = "Timesheet";
  const sub ="Clocked in";
  const sub1 ="Clocked late";
  const sub2 = "Off Today"

  return (
    <div>
      <Header />
      <Sidebar />
      <Title text={text} 
      sub={sub}
      sub1={sub1}
      sub2={sub2}
      />
      <Table />
    </div>
  );
};

export default Timesheet;
