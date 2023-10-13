import React, { useContext } from "react";

//import context
import { SidebarContext } from "../contexts/SidebarContext";
//import icon

import { GrCart } from "react-icons/gr";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div>
      <div className="bg-pink-200">Header</div>
      <div
        className="relative flex cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GrCart className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
