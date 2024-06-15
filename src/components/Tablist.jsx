import React, { Children, useState } from "react";

const Tablist = ({ tabChild, activeTabIndex = 0 }) => {
  const tabData = [
    {
      button: "Clocked In",
    },
    {
      button: "Clocked Out",
    },
    {
      button: "Off Today",
    },
  ];

  const [tabs, setTabs] = useState(activeTabIndex);
  const handleTabClick = (index) => {
    setTabs(index);
  };

  return (
    <div className="Tablist" role="tabpanel">
      {tab}
      <nav className="tab-nav">
        <ul className="tab-menu">
          <li className="tab-item" id="1" aria-labelledby="label">
            <button className="tab-button">Clock-in</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Tablist;
