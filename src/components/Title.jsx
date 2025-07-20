import React, { useState } from "react";

const Title = ({ text, sub, sub1, sub2, content, content2 }) => {
  // const [toggle, setToggle] = useState(1);
  // console.log(toggle);

  // const updateToggle = (index) => {
  //   // setToggle(()=>{index})
  //   setToggle(index);
  // };

  // const tabData = [
  //   {
  //     button: sub,
  //     content: content,
  //   },
  //   {
  //     button: sub1,
  //     // content: content2,
  //   },
  //   {
  //     button: sub2,
  //   },
  // ];

  const [tabs, setTabs] = useState(0);

  return (
    <div className="Title">
      <div className="titleHead">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Title;
