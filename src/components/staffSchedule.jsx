import React from "react";

const staffSchedule = () => {
  return (
    <div className="staffSchedule">
      <div className="schedule-staff">
        <h2>Uche Okey</h2>
        <p className="monthSum">2/07/2024 -30/09/2024</p>
      </div>

      <div className="scheduleSheet">
        <h4 className="month">July</h4>
        <div className="scheduleLinks">
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
        </div>

        <table className="calendar">
<tr>
    <th> Date</th>
</tr>

            <tr colspan ="7">
                <td>Monday, 2 July</td>
                <td>7:40 am</td>
                <td></td>
                
            </tr>

        </table>
      </div>
    </div>
  );
};

export default staffSchedule;
