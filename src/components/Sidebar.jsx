import React from 'react'
import Logo from '../assets/Logo/ipi Solutions New 1.png'
// import Dash from '../assets/icons/dashb'


const Sidebar = () => {
  return (
         <nav className="sidebar">
        <div className="logo">
            <img src={Logo} alt=""/>
        </div>

        <button id="clock" className="clock">Clock in</button>
        
{/* These are the side menu bars */}
        <div className="menu">
            <ul className="menu-items">

                <li className="menu-list">
                    
                    <a id="menu-icon" className="menu-list" href="#">
                        <div className="stroke"> </div>
                        <img className="menu-icon" src="icons/dashboard-square-02.svg" alt=""/>
                        <p>Dashboard</p>
                    </a>
                </li>

                <li className="menu-list">
                    <a id="menu-icon" className="menu-list" href="#">
                        <img className="menu-icon" src="icons/vuesax/linear/calendar.svg" alt=""/>
                        <p>Timesheet</p>
                    </a>
                </li>

                <li className="menu-list">
                    <a id="menu-icon" className="menu-list" href="#">
                        <img className="menu-icon" src="icons/task-daily-02.svg" alt=""/>
                        <p>Tasks</p>
                    </a>
                </li>


                <li className="menu-list">
                    <a id="menu-icon" className="menu-list" href="#">
                        <img className="menu-icon" src="icons/invoice-03.svg" alt=""/>
                        <p>Payroll</p>
                    </a>
                </li>


                <li className="menu-list">
                    <a id="menu-icon" className="menu-list" href="#">
                        <img className="menu-icon" src="icons/waterfall-up-01.svg" alt=""/>
                        <p>Reports</p>
                    </a>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default Sidebar