import React, { useState } from "react";
import userpic from "../assets/images/profile.png";
import notclocked from "./notclocked";

const Table = ({ userTable }) => {
  return (
    <div>
      <table className="staffTable">
        <thead>
          <tr className="table-head">
            <th>Staff Name</th>
            <th>Card ID </th>
            <th>Email Address </th>
            <th>Role</th>
            <th>Time</th>
            <th>Status </th>
            <th>Date </th>
          </tr>
        </thead>
        <tbody>
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
              <td>{tabb.time}</td>
              <td className="staff-status">
                <div
                  className={`${
                    tabb.status === "Clocked in"
                      ? "clocked"
                      : tabb.status === "Clocked late"
                      ? "late"
                      : tabb.status === "Off today"
                      ? "off"
                      : ""
                  }`}
                >
                  <div className="circle"></div>
                  {tabb.status}
                </div>
              </td>

              <td>{tabb.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
