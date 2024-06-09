import React from "react";
import userpic from "../assets/images/profile.png";

const Table = () => {
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

        <tr>
          <td className="staff-name">
            <span className="tt">
              <img className="userpic" src={userpic} alt="" />
              Julius Gabriel
            </span>
          </td>
          <td>23476</td>
          <td>example@gmail.com</td>
          <td>Frontend developer</td>
          <td className="staff-status">
            <div className="clockedStatus">
              <span className="stat">
                <div className="circle"></div>
                Clocked in
              </span>
            </div>
          </td>
          <td>2024</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
