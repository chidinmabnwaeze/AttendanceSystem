import React from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/leave.css"

const leave = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Title />

<div className="form-border">
      <form action="">

        <div className="name">
          <label  className= "staff" htmlFor="name">
            Name of staff
            <input type="text" placeholder="Select staff" />
          </label>
        </div>

        <div className="name">
          <label className= "staff" htmlFor="name">
            Staff Role
            <input type="text" placeholder="Staff role" />
          </label>
        </div>

        <div className="name">
          <label className= "staff" htmlFor="name">
           Purpose of leave
            <input type="text" placeholder="Enter purpose of leave" />
          </label>
        </div> 

        <div className="name">
          <label className= "staff" htmlFor="name">
          Description
            <input type="textarea" placeholder="Describe your leave" textarea ="" />
          </label>
        </div>

        <div className="name">
          <label className= "staff" htmlFor="name">
          Leave duration
            <input type="textarea" placeholder="Describe your leave" textarea ="" />
          </label>
        </div>

        <div className="formButtons">
    <button className="cancel">Cancel</button>
    <button className="approve">Approve Leave</button>
    </div>
    
      </form>
      </div>

    </div>
  );
};

export default leave;
