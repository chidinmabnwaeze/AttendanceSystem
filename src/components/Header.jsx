import React, { useState } from "react";
import { Menu } from "lucide-react";
import { useSidebar } from "./sidebarContext";

const Header = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="attendance flex justify-between">
      {/* collapsable menu */}
      <div className="menu collapseMenu">
        <Menu onClick={toggleSidebar} />
      </div>
      <div className="header-text">
        <h5>ATTENDANCE CLOCKING SYSTEM</h5>
      </div>
    </header>
  );
};

export default Header;
