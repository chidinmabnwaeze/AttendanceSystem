import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Scan from "../assets/images/card scanner img.png";
import Clock from "../assets/images/Chronometer.png";
import rafiki from "../assets/images/rafiki.png";

const clocking = () => {
  const clock = new Date().toLocaleTimeString("en-NG", { hour12: true });

  const [currentTime, setCurrentTime] = useState(clock);

  const updateCurrentTime = () => {
    const clock = new Date().toLocaleTimeString("en-NG", { hour12: true });
    setCurrentTime(clock);
  };

  setInterval(updateCurrentTime, 1000);

  const date = new Date().toDateString();

  //   useEffect(() =>{
  //     const interval =

  //     return() =>{
  //         clearInterval(interval);
  //     }
  //   }, [])

  function timeFormat() {
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    const meridiem = hours < 12 ? "AM" : "PM";

    return `${hours} ${minutes}`;
  }

  return (
    <main>
      <Header />
      <Sidebar />
      <section className="main-clocking">
        <section className="section1">
          <div className="welcometext">
            <div className="welcome">
              <h2>Welcome User,</h2>
            </div>
            <div className="welcome">
              <h4>Keva Foundation Attendance</h4>
            </div>
            <div className="welcome">
              <p>Clock in</p>
            </div>
          </div>

          <div className="illustration">
            <img src={rafiki} alt="" />
          </div>
        </section>

        <section className="section2">
          <section className="right-section">
            <div className="clock-img">
              <img className="roundClock" src={Clock} alt="" />
            </div>

            <div className="timebuttons">
              <button className="time">
                <h4 id="hrs">{currentTime.split(":")[0]}</h4>
                <p>Hours</p>
              </button>
              <button className="time">
                <h4 id="mins">{currentTime.split(":")[1]}</h4>
                <p>Minutes</p>
              </button>
              <button className="time">
                <h4 id="secs">{currentTime.split(":")[2].split(" ")[0]}</h4>
                <p>Seconds</p>
              </button>
              <button className="time">
                <h4 id="am">{currentTime.split(" ")[1].toUpperCase()}</h4>
              </button>

              <div className="dateStamp">
                <h4 className="date">{date}</h4>
              </div>
            </div>
          </section>
          <div className="scanner">
            <div className="inner">
              <img src={Scan} alt="" />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default clocking;
