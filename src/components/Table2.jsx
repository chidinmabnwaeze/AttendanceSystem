import React from "react";
import userpic from "../assets/images/profile.png";
import Notclocked from "../components/notclocked";

const Table = () => {
  const tab = [
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Clocked Late",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Clocked Late",
      date: "2024-06-09",
    },

    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Backend developer",
      status: "Clocked Late",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Clocked Late",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Clocked Late",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 23476,
      email: "example@gmail.com",
      role: "Frontend developer",
      status: "Clocked Late",
      date: "2024-06-09",
    }
  ];
  return (
    <div>
      <table className="staffTable" >
        <tr className="table-head" >
          <th>Staff Name</th>
          <th>Card ID </th>
          <th>Email Address </th>
          <th>Role</th>
          <th>Status </th>
          <th>Date </th>
        </tr>

        {tab.map((tabb, index) => (
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
                <span className="stat2">
                  <div className="circle-not"></div>

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
