import React from "react";
import userpic from "../assets/images/profile.png";

const PayrollTable = () => {
  const payTable = [
    {
      img: userpic,
      name: "Julius Gabriel",
      id: 3476,
      email: "example@gmail.com",
      role: "Frontend developer",
      abTime: "8",
      prTime: "17",
      salary: "200,000",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Ade Ola",
      id: 2346,
      email: "example@gmail.com",
      role: "Frontend developer",
      abTime: "5",
      prTime: "20",
      salary: "200,000",
      date: "2024-06-09",
    },

    {
      img: userpic,
      name: "James Bush",
      id: 2763,
      email: "example@gmail.com",
      role: "Backend developer",
      abTime: "13",
      prTime: "19",
      salary: "Clocked late",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Kola Abioye",
      id: 1347,
      email: "example@gmail.com",
      role: "Frontend developer",
      abTime: "18",
      prTime: "19",
      salary: "Off today",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Onyeka Eze",
      id: 1476,
      email: "example@gmail.com",
      role: "UI/UX Designer",
      abTime: "9",
      prTime: "19",
      salary: "200,000",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Mary Onu",
      id: 4761,
      email: "example@gmail.com",
      role: "Frontend developer",
      abTime: "12",
      prTime: "19",
      salary: "200,000",
      date: "2024-06-09",
    },
    {
      img: userpic,
      name: "Stella Maris",
      id: 2347,
      email: "example@gmail.com",
      role: "Frontend developer",
      abTime: "12",
      prTime: "10",
      salary: "Clocked late",
      date: "2024-06-09",
    },
  ];
  return (
    <div>
      <table className="staffTable">
        <thead>
          <tr className="table-head">
            <th>Staff Name</th>
            <th>Card ID </th>
            <th>Email Address </th>
            <th>Role</th>
            <th>Absent Times</th>
            <th>Present Times</th>
            <th>Total Salary(#) </th>
            <th>Date </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {payTable.map((tabb, index) => (
            <tr className="rows" key={index}>
              <td className="staff-name">
                <img className="userpic" src={tabb.img} alt="" />
                {tabb.name}
              </td>
              <td>{tabb.id}</td>
              <td>{tabb.email}</td>
              <td>{tabb.role}</td>
              <td>{tabb.abTime}</td>
              <td>{tabb.prTime}</td>
              <td className="staff-status">
                <div
                  className={`${
                    tabb.status === "200,000"
                      ? "clocked"
                      : tabb.status === "Clocked late"
                      ? "late"
                      : tabb.status === "Off today"
                      ? "off"
                      : ""
                  }`}
                >
                  <div className="circle"></div>
                  {tabb.salary}
                </div>
              </td>

              <td>{tabb.date}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollTable;
