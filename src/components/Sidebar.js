import React, { useContext } from "react";
import { Link } from "react-router-dom";
//import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

//import componebts
import CartItem from "./CartItem";

//import sidebarcontext
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } xl:max-w[30vh] fixed top-0  z-20 h-full w-full bg-white px-4 shadow-2xl transition-all duration-300 md:w-[35vw] lg:px-[35px]`}
    >
      <div className="flex items-center justify-between border-b py-6">
        <div className="text-sm font-semibold uppercase">Cart(0)</div>

        {/* icons */}
        <div
          onClick={handleClose}
          className="flex h-8 w-8 cursor-pointer items-center justify-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
