import React from "react";
import userpic from "../assets/images/profile.png";

const Table = ({ leaveData }) => {
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

        {leaveData.length > 0 ? (
          leaveData.map((tabb, index) => (
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
