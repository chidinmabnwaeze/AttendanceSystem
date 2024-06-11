import React, { useState } from "react";
import "../styles/payroll.css"

const staffSchedule = () => {

    const [Schedule, setSchedule] = useState([
        {
            date : "Monday, 2 July",
            clockInTime : "7:40am",
            lunchBreak : " ",
            clockOutTime : " " ,
            offToday : " check"
        },
        {
            date : "Monday, 2 July",
            clockInTime : "7:40am",
            lunchBreak : " ",
            clockOutTime : " " ,
            offToday : " check"
        },
        {
            date : "Monday, 2 July",
            clockInTime : "7:40am",
            lunchBreak : " ",
            clockOutTime : " " ,
            offToday : " check"
        },
        
    ])


  return (
    <div className="staffSchedule">
      <div className="schedule-staff">
        <h3 className="userName">Uche Okey</h3>
        <p className="monthSum">2/07/2024 -30/09/2024</p>
      </div>

      <div className="scheduleSheet">
        <h4 className="month">July</h4>

        {/* <div className="scheduleLinks">
          <div className="date">
            <p className="presentDays">Date</p>
          </div>
          <div className="links">
          <div className="clockInTime">
            <p>Clock in Time</p>
          </div>
          <div className="lunch-break">
            <p>Lunch break</p>
          </div>
          <div className="clockOutTime">
            <p>Clock Out Time</p>
          </div>
          <div className="offToday">
            <p>Off Today</p>
          </div>
          </div>
        </div> */}

        <table className="calendar">
<tr>
    <th className="payroll-tableHead"> Date</th>
    <th className="payroll-tableHead"> Clock in Time</th>
    <th className="payroll-tableHead"> Lunch Break</th>
    <th className="payroll-tableHead"> Clock Out Time</th>
    <th className="payroll-tableHead"> Off Today</th>
</tr>

{Schedule.map((schedule , index)=>(
 <tr colspan ="7" key={index}>
 <td>{schedule.date}</td>
 <td>{schedule.clockInTime}</td>
 <td>{schedule.lunchBreak}</td>
 <td>{schedule.clockOutTime}</td>
 <td>{schedule.offToday}</td>
</tr>

))}
           
        </table>
      </div>
    </div>
  );
};

export default staffSchedule;
