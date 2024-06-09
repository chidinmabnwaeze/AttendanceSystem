import React from "react";
import Title from "../components/Title";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "../styles/leave.css";

const leave = () => {
  const text = "Leave";
  const apply ="Apply"
  const onLeave = "On Leave"
  return (
    <div>
      <Header />
      <Sidebar 
     
      />
      <Title text={text} 
       apply={apply}
       onLeave ={onLeave}/>

      <div className="form-border">
        <form action="">
          <div className="name">
            <label className="staff" htmlFor="name">
              Name of staff
              <input type="text" placeholder="Select staff" />
            </label>
          </div>

          <div className="name">
            <label className="staff" htmlFor="name">
              Staff Role
              <input type="text" placeholder="Staff role" />
            </label>
          </div>

          <div className="name">
            <label className="staff" htmlFor="name">
              Purpose of leave
              <input type="text" placeholder="Enter purpose of leave" />
            </label>
          </div>

          <div className="name">
            <label className="staff" htmlFor="name">
              Description
              <input
                type="textarea"
                placeholder="Describe your leave"
                textarea=""
              />
            </label>
          </div>

          <div className="name">
            <label className="staff" htmlFor="name">
              Leave duration
              <input
                type="textarea"
                placeholder="Describe your leave"
                textarea=""
              />
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
