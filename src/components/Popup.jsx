import React, { useState } from "react";
import Profile from "../assets/images/profile.png";
import close from "../assets/icons/close.png";
import check from '../assets/icons/ep_success-filled.png'

const Popup = () => {
  const[ details, setDetails]= useState([
    {
      title: "Name:",
      name: "Sarah Duke",
      id: "Card Id:",
      idNumber: "009867",
      email: "sarahduke@gmail.com",
      phoneNumber: "08026784895",
      department: "IT",
    },
  ]);

  const currentTime = new Date();

  return (
    <div className="popup">
      <div className="exit">
        <p className="clockInText">Clock in</p>
        <img src={close} alt="" />
      </div>
      <div className="cards">
      <div className="user">
        <div className="profilePic">
          <img className="pic" src={Profile} alt="" />
          <p className="jobRole">Frontend developer</p>
        </div>

        <div className="userDetails">
          {details.map((detail, index) => (
            <div className="userInfo">
                <div className="fields">
                <p className="title"> Name:</p>
                <p className="title">Card Id:</p>
                <p className="title"> Email:</p>
                <p className="title"> Phone number:</p>
                <p className="title"> Department:</p>
                </div>
                <div className="fields">
                <p className="info"> Sarah Duke</p>
                <p className="info"> 009867</p>
                <p className="info"> sarahduke@gmail.com</p>
                <p className="info"> 08026784895</p>
                <p className="info"> IT</p>
                
                </div>

              {/* <div className="subject">
                <p className="title"> Name:</p>
                <p className="info"> Sarah Duke</p>
              </div>
              <div className="subject">
                <p className="title">Card Id:</p>
                <p className="info"> 009867</p>
              </div>
              <div className="subject">
                <p className="title"> Email</p>
                <p className="info"> sarahduke@gmail.com</p>
              </div>
              <div className="subject">
                <p className="title"> Phone number</p>
                <p className="info"> 08026784895</p>
              </div>
              <div className="subject">
                <p className="title"> Department</p>
                <p className="info"> IT</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>

<div className="currentTime">
    <h3 className="dayStatus">TODAY</h3>
    <p className="cT">Current Time</p>
    <p className="currentDaysTime">{currentTime.getTime()}</p>
</div>

<div className="card3">
<div className="clockInTime">
<img className="check" src={check} alt="" />
<p>CLOCK-IN <br></br> <br /> SUCCESSFUL</p>
</div>

<div className="weekDay">
  <h3>MONDAY</h3>  
 <p>June 10, 2024</p>
 <p className="timeClockedIn">{currentTime.getTime}</p>
</div>
    </div>
    </div>
    </div>
  );
};

export default Popup;
