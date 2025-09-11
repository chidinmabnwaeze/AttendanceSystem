import React from "react";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="attendance flex justify-between">
      {/* collapsable menu */}
      <div className="menu">
        <Menu />
      </div>
      <div className="header-text">
        <h5>ATTENDANCE CLOCKING SYSTEM</h5>
      </div>
    </header>
  );
};

export default Header;
