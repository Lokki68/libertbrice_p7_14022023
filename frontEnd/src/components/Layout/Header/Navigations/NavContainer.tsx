import React from "react";
import { User } from "../../../../utils/types";
import { Link } from "react-router-dom";
import { AiOutlineUnlock } from "react-icons/ai";
import DesktopNav from "./NavContent/DesktopNav";
import MobileNav from "./NavContent/MobileNav";

const NavContainer = ({ info }: { info: User }) => {
  const displayUsernameorAdmin = info.admin ? (
    <Link
      to={"/admin"}
      className="btn w-6 h-6 mx-1 p-0 items-center justify-center"
    >
      <AiOutlineUnlock />
    </Link>
  ) : (
    <p className="text-xl tex-gray-50 mr-2">{info.username}</p>
  );

  return (
    <div className="relative flex w-full justify-between items-center ">
      <DesktopNav />
      <MobileNav />
      <div>{displayUsernameorAdmin}</div>
    </div>
  );
};

export default NavContainer;
