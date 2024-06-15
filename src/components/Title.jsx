import React, { useState } from "react";
import search from "../assets/icons/Component 248.png";
import Filter from "../assets/icons/funnel.png";
import Table from "./Table";


const Title = ({text, sub ,sub1 ,sub2}) => {

const [toggle, setToggle] = useState(1)
console.log(toggle)

 const updateToggle = (index)=>{
// setToggle(()=>{index})
setToggle(index)
}

  return (
    <div className="Title">
      <div className="titleHead">
        <h1>{text}</h1>
      </div>

      <div className="statusHead">
        <div className="status">
        <li className={toggle === 1 ? " tab active-tab" : "tab"} onClick={()=> updateToggle(1)}>{sub}</li>
          <li className={toggle === 2 ? " tab active-tab" : "tab"} onClick={()=> updateToggle(2)}>{sub1}</li>
          <li className={toggle === 3 ? " tab active-tab" : "tab"} onClick={()=> updateToggle(3)}>{sub2}</li>
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


      <div className="content">
<Table/>
      </div>
    </div>
  );
};

export default Title;
