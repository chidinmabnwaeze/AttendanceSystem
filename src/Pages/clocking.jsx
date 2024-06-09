import React, { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Scan from '../assets/images/card scanner img.png'
import Clock from '../assets/images/Chronometer.png'
import rafiki from '../assets/images/rafiki.png'



const clocking = () => { 

    const clock = new Date().toLocaleTimeString();
    const [currentTime , setCurrentTime] = useState(clock);

const updateCurrentTime = () =>{
    const clock =new Date().toLocaleTimeString();
    setCurrentTime(clock);
}
setInterval(updateCurrentTime,1000)

  return (
        <main>
            <Header/>
            <Sidebar/>
        <section className="section1">
            <div className="welcometext">

                <div className="welcome">
                    <h2>Welcome User,</h2>
                </div>
                <div className="welcome">
                    <h4>IPI Solutions Limited Attendances</h4>
                </div>
                <div className="welcome">
                    <p>Clock in</p>
                </div>

            </div>

            <section className="right-section">
                <div className="clock-img">
                    <img className='roundClock' src={Clock} alt=""/>
                </div>

                <div className="timebuttons">
                    <button className="time">
                        <h4 id="hrs">{currentTime}:</h4>
                        <p>Hours</p>
                    </button>
                    <button className="time">
                        <h4 id="mins">08 :</h4>
                        <p>Minutes</p>
                    </button>
                    <button className="time">
                        <h4 id="secs">08 :</h4>
                        <p>Seconds</p>
                    </button>
                    <button className="time">
                        <h4 id="am">AM</h4>
                    </button>
                    
                    <div className="dateStamp">
                      <h4>{}</h4>  
                    </div>
                </div>
            </section>
        </section>

        <section className="section2">
            <div className="illustration">
                <img src={rafiki} alt=""/>
            </div>
            <div className="scanner">
                <div className="inner">
                    <img src={Scan} alt=""/>
                </div>
            </div>
        </section>
   
    </main>
  )
}

export default clocking