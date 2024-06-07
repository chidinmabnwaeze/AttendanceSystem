import React from "react";
import search from "../assets/icons/Component 248.png";
import Filter from "../assets/icons/funnel.png";
const Title = () => {
  return (
    <div className="Title">
      <div className="titleHead">
        <h1>Timesheet</h1>
      </div>

      <div className="statusHead">
        <div className="status">
          <p className="clockIn">Clocked in</p>
          <p className="clockLate">Clocked late</p>
          <p className="offToday">Off Today</p>
        </div>

        <div className="right">
          <button className="filterButton">
            <img className="filter" src={Filter} alt="" />
          </button>
          <input type="searchbox" placeholder="Card ID, Role or Staff name" />
          <img className="search-icon" src={search} alt="" />
        </div>
        <hr />
      </div>

    </div>
  );
};

export default Title;
