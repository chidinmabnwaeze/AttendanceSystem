import React, { useEffect, useState } from "react";
import userpic from "../assets/images/profile.png";

const Table = ({ leaveData }) => {
  const [leave, setLeave] = useState([]);
  const [leaveList, setLeaveList] = useState([])

useEffect(()=>{
     const savedData = JSON.parse(localStorage.getItem("leaveData") || [])
   setLeaveList(savedData) 
},[])

  useEffect(() => {
    const postLeave = async () => {
      try {
        fetch("https://jsonplaceholder.typicode.com/users", {
          method: "POST",
          headers: "Content-Type: application-json",
          body: {
            ...leave,
            role: "",
            purpose: "",
            description: "",
            start: "",
            end: "",
          },
        });
        setLeave(leave);
        setLeave({
             role: "",
            purpose: "",
            description: "",
            start: "",
            end: "",
        })
      } catch (error) {
        console.error("Error:", error);
      }
      postLeave();
    };
  }, []);
  console.log(leave);

  useEffect(()=>{
   const savedData = JSON.parse(localStorage.getItem("leaveData") || [])
   localStorage.setItem("leaveData", JSON.stringify(leaveData))
   setLeaveList(savedData) 
  },[])

  return (
    <div>
      <table className="staffTable">
        <tr className="table-head">
          <th>Staff Name</th>
          <th> </th>
          <th>Role</th>
          <th>Purpose of Leave </th>
          <th>Description</th>
          <th>Start Date </th>
          <th>End Date </th>
        </tr>

        {leaveList.length > 0 ? (
          leaveList.map((tabb, index) => (
            <tr className="rows" key={index}>
              <td className="staff-name">
                <span className="tt">
                  <img className="userpic" src={tabb.img} alt="" />
                  {tabb.name}
                </span>
              </td>
              <td>{tabb.staffId}</td>
              <td>{tabb.role}</td>
              <td className="staff-status">
                <div className="clockedStatus">
                  <span className="stat3">
                    <div className="circle-leave"></div>
                    {tabb.purpose}
                  </span>
                </div>
              </td>
              <td>{tabb.description}</td>
              <td>{tabb.start}</td>
              <td>{tabb.end}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="no-leave m-40 text-purple-400">
              No approved leave yet
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Table;
