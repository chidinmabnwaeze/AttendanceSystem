import React from "react";
import userpic from "../assets/images/profile.png";

const Table = ({ leaveData }) => {
  const tab = [
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Leave",
      start: "2024-06-09",
      end: "2024-10-15",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Leave",
      start: "2024-06-09",
      end: "2024-10-15",
    },

    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Backend developer",
      status: "Leave",
      start: "2024-06-09",
      end: "2024-10-15",
    },
  ];
  return (
    <div>
      <table className="staffTable">
        <tr className="table-head">
          <th>Staff Name</th>
          <th>Card ID </th>
          <th>Email Address </th>
          <th>Role</th>
          <th>Status </th>
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
              <td>{tabb.id}</td>
              <td>{tabb.email}</td>
              <td>{tabb.role}</td>
              <td className="staff-status">
                <div className="clockedStatus">
                  <span className="stat3">
                    <div className="circle-leave"></div>

                    {tabb.status}
                  </span>
                </div>
              </td>
              <td>{tabb.start}</td>
              <td>{tabb.end}</td>
            </tr>
          ))
        ) : (
          <div>No approved leave yet</div>
        )}
      </table>
    </div>
  );
};

export default Table;
