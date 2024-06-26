import React, { useState } from "react";
import "../styles/payroll.css";
import arrowUp from "../assets/icons/arrow-up.svg";
import arrowDown from "../assets/icons/arrow-down.svg";
import check from "../assets/icons/Vector-c.png";

const staffSchedule = () => {
  const [Schedule, setSchedule] = useState([
    {
      date: "Monday, 2 July",
      clockInTime: "7:40am",
      lunchBreak: " ",
      clockOutTime: " ",
      offToday: " ",
    },
    {
      date: "Tuesday, 3 July",
      clockInTime: "8:10am",
      lunchBreak: " ",
      clockOutTime: " ",
      offToday: " check",
    },
    {
      date: "Wednesday, 4 July",
      clockInTime: "8:20am",
      lunchBreak: " ",
      clockOutTime: "5:20pm ",
      offToday: " ",
    },
    {
        date: "Thursday, 5 July",
        clockInTime: "7:48am",
        lunchBreak: " ",
        clockOutTime: " ",
        offToday: " ",
      },
      {
        date: "Friday, 6 July",
        clockInTime: "7:48am",
        lunchBreak: " ",
        clockOutTime: " ",
        offToday: " ",
      }
  ]);

  return (
    <div className="staffSchedule">
      <div className="scheduleHeading">
        <div className="schedule-staff">
          <h3 className="userName">Uche Okey</h3>
          <p className="monthSum">2/07/2024 -30/09/2024</p>
        </div>

        <div className="scheduleMonth">
          <h4 className="month">July</h4>
        </div>
      </div>

      <div className="schedule-sheet">
        <div className="scroll">
         <button className="up"><img src={arrowUp} alt="" /></button> 
          <button className="down"><img src={arrowDown} alt="" /></button>
        </div>

        <div className="calendar-div">
          <table className="calendar">
            <tr cellspacing="3px">
              <th className="payroll-date"> Date</th>
              <th className="payroll-clockIn"> Clock in Time</th>
              <th className="payroll-lunchBreak" cellspacing="4">
                Lunch Break
              </th>
              <th className="payroll-clockOut"> Clock Out Time</th>
              <th className="payroll-off"> Off Today</th>
            </tr>

            {Schedule.map((schedule, index) => (
              <tr colspan="7" key={index}>
                <td className="payClass">{schedule.date}</td>
                <td className="payClass">{schedule.clockInTime}</td>
                <td className="payClass">{schedule.lunchBreak}</td>
                <td className="payClass">{schedule.clockOutTime}</td>
                <td className="payClass">{schedule.offToday}</td>
              </tr>
            ))}
          </table>

          {/* scrollbar */}
        </div>
      </div>
      <div className="sumButtons">
      <button className="total">Total</button>
        <button className="sum">200 000</button>
    </div>
    </div>
  );
};

export default staffSchedule;
