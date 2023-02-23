import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import NavContainer from "./Navigations/NavContainer";
import ConnectionNav from "./Navigations/ConnectionNav";
import { useSelector } from "react-redux";
import { RootState } from "../../../utils/types";

const Header = () => {
  const { isLogged, infos } = useSelector((state: RootState) => state.user);

  return (
    <div className="fixed z-30  flex flex-col justify-start w-full h-20 bg-primary-300 shadow-sm">
      <div className="flex justify-center items-center my-2 mx-2.5">
        <RiGlobalLine className="text-2xl text-white" />
        <p className="text-white font-bold text-2xl">Groupomania</p>
      </div>
      {isLogged ? <NavContainer info={infos} /> : <ConnectionNav />}
    </div>
  );
};

export default Header;
