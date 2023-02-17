import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  IoIosLogOut,
  IoSettingsSharp,
} from "react-icons/all";
import HeaderButton from "../../../../../UiComponents/HeaderButton";
import { useNavigate } from "react-router-dom";
import { removeLocalStorage } from "../../../../../../utils/utils";

const MobileNav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleNav = () => setOpen(!open);

  const logout = () => {
    removeLocalStorage();
    navigate("/login");
  };

  return (
    <div className="flex ml-4 md:hidden cursor-pointer">
      {open ? (
        <div onClick={toggleNav}>
          <AiOutlineClose />
        </div>
      ) : (
        <div onClick={toggleNav}>
          <AiOutlineMenu />
        </div>
      )}
      <div className="absolute -bottom-52 left-0 ">
        {open ? (
          <div>
            <nav className="flex flex-col justify-between h-52 w-32 backdrop-blur shadow-md rounded-md ">
              <div className="space-y-2 mt-4">
                <HeaderButton
                  onClick={() => {
                    toggleNav();
                    navigate("/");
                  }}
                >
                  Home
                </HeaderButton>
                <HeaderButton
                  onClick={() => {
                    toggleNav();
                    navigate("/annuaire");
                  }}
                >
                  Annuaire
                </HeaderButton>
              </div>
              <div>
                <div className="flex justify-between">
                  <div
                    onClick={() => {
                      toggleNav();
                      navigate("/profil");
                    }}
                    className="cursor-pointer p-1 hover:text-primary-300"
                  >
                    <IoSettingsSharp className="h-7 " />
                  </div>
                  <div
                    onClick={logout}
                    className="cursor-pointer p-1 hover:text-primary-300"
                  >
                    <IoIosLogOut className="h-7" />
                  </div>
                </div>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MobileNav;
