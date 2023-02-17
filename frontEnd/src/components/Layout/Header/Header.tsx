import React from "react";
import { RiGlobalLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className="fixed z-30  flex flex-col justify-start w-full h-20 bg-primary-300 shadow-sm">
      <div className="flex justify-center items-center mt-2 mx-2.5">
        <RiGlobalLine className="h-9 text-white" />
        <p className="text-white font-bold text-2xl">Groupomania</p>
      </div>
    </div>
  );
};

export default Header;
