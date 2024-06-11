import React, { useState } from "react";
import "../styles/payroll.css"
import arrowUp from "../assets/icons/arrow-up.svg"
import arrowDown from "../assets/icons/arrow-down.svg"

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

        <table className="calendar">
<tr cellspacing ="3px">
    <th className="payroll-date"> Date</th>
    <th className="payroll-clockIn"> Clock in Time</th>
    <th className="payroll-lunchBreak" cellspacing ="4"> Lunch Break</th>
    <th className="payroll-clockOut"> Clock Out Time</th>
    <th className="payroll-off"> Off Today</th>
</tr>

{Schedule.map((schedule , index)=>(
 <tr colspan ="7" key={index}>
 <td className="payClass">{schedule.date}</td>
 <td className="payClass">{schedule.clockInTime}</td>
 <td className="payClass">{schedule.lunchBreak}</td>
 <td className="payClass">{schedule.clockOutTime}</td>
 <td className="payClass">{schedule.offToday}</td>
</tr>

))}
           
        </table>
      </div>


      {/* scrollbar */}
      <div className="scroll">
        <img src={arrowUp} alt="" />
        <img src={arrowDown}alt="" />
      </div>
    </div>
  );
};

export default staffSchedule;
