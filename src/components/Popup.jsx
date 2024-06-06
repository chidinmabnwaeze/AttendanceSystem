import React, { useState } from "react";
import Profile from "../assets/images/profile.png";
import close from "../assets/icons/close.png";

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

  return (
    <div className="popup">
      <div className="exit">
        <p className="clockInText">Clock in</p>
        <img src={close} alt="" />
      </div>
      <div className="user">
        <div className="profilePic">
          <img className="pic" src={Profile} alt="" />
          <p className="jobRole">Frontend developer</p>
        </div>

        <div className="userDetails">
          {details.map((detail, index) => (
            <div className="userInfo">
              <div className="subject">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
