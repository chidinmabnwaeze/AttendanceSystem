import React, { Children, useState } from "react";
import Table from "./Table";

const Tablist = () => {
  const tabData = [
    {
      button: "Clocked In",
      content: "this is tab 1 content",
    },
    {
      button: "Clocked Out",
      content: "this is tab 2 content",
    },
    {
      button: "Off Today",
      content: <Table />,
    },
  ];

  const [tabs, setTabs] = useState(0);
  //   const handleTabClick = (index) => {
  //     setTabs(index);
  //   };

  return (
    <div className="Tablist" role="tabpanel">
      <div className="tab-header">
        {tabData.map((data, index) => (
          <nav className="tab-nav" key={index}>
            <ul className="tab-menu">
                <div className="activeTabIndicator">
              <li
                className={`${index === tabs && "active"} tab-item ${<hr/>}`}
                onClick={() => setTabs(index)}
              >
                {/* //  id="1" aria-labelledby="label" */}
                {data.button}
                
                {/* <hr /> */}
              </li>
              {/* <span className=""><hr /></span> */}
              </div>
            </ul>
          </nav>
        ))}
      </div>

      <div className="tabContent">
        {tabData.map((data, index) => (
          <p className="tab-content" key={index}>
            {tabData[tabs].content}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tablist;
