import React from "react";
import search from "../assets/icons/Component 248.png";
import Filter from "../assets/icons/funnel.png";
const Title = ({text, sub ,sub1 ,sub2}) => {
  return (
    <div className="Title">
      <div className="titleHead">
        <h1>{text}</h1>
      </div>

      <div className="statusHead">
        <div className="status">
          <a className="clockIn" href="../Pages/clocking.jsx">{sub}</a>
          <a className="clockLate" href="../Pages/clocking.jsx">{sub1}</a>
          <a className="offToday" href="../Pages/clocking.jsx">{sub2}</a>
        </div>

        <div className="right">
          <button className="filterButton">
            <img className="filter" src={Filter} alt="" />
          </button>
          <input className= 'input' type="searchbox" id="input" placeholder="Card ID, Role or Staff name" />
          <img className="search-icon" id="input" src={search} alt="" />
        </div>
       
      </div>
      <hr />
    </div>
  );
};

export default Title;
