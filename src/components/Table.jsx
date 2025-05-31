import React from "react";
import userpic from "../assets/images/profile.png";
import notclocked from "./notclocked";

const Table = ({ userTable }) => {
  return (
    <div>
      <table className="staffTable">
        <tr className="table-head">
          <th>Staff Name</th>
          <th>Card ID </th>
          <th>Email Address </th>
          <th>Role</th>
          <th>Status </th>
          <th>Date </th>
        </tr>

        {userTable.map((tabb, index) => (
          <tr className="rows" key={index}>
            <td className="staff-name">
              <span className="tt">
                <img className="userpic" src={tabb.img} alt="" />
                {tabb.name}
              </span>
            </td>
            <td>{tabb.id}</td>
            <td>{tabb.email}</td>
            <td>{tabb.role}</td>
            <td className="staff-status">
              <div className="clockedStatus">
                <span className="stat">
                  <div className="circle"></div>

                  {tabb.status}
                </span>
              </div>
            </td>
            <td>{tabb.date}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
