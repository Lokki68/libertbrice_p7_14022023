import React from "react";
import { User } from "../../../../utils/types";
import { useNavigate } from "react-router-dom";
import { AiOutlineUnlock } from "react-icons/ai";
import DesktopNav from "./NavContent/DesktopNav";
import MobileNav from "./NavContent/MobileNav";

const NavContainer = ({ info }: { info: User }) => {
  const navigate = useNavigate();
  const displayUsernameorAdmin = info.admin ? (
    <p
      onClick={() => navigate("/admin")}
      className="text-xl text-gray-50 mr-2 cursor-pointer"
    >
      <AiOutlineUnlock />
    </p>
  ) : (
    <p className="text-xl text-gray-50 mr-2">{info.username}</p>
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
