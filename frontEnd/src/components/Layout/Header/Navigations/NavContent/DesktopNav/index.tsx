import React from "react";
import HeaderButton from "../../../../../UiComponents/HeaderButton";
import { IoIosLogOut, IoSettingsSharp } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import { removeLocalStorage } from "../../../../../../utils/utils";

const DesktopNav = () => {
  const navigate = useNavigate();

  const logout = () => {
    removeLocalStorage();
    navigate("/login");
  };

  return (
    <div className="hidden md:flex w-3/4">
      <div className="flex flex-1 w-full">
        <div className="flex justify-between items-center w-2/4">
          <div className="flex justify-between w-20 mx-2">
            <HeaderButton onClick={logout}>
              <IoIosLogOut className="h-5" />
            </HeaderButton>

            <HeaderButton onClick={() => navigate("/profil")}>
              <IoSettingsSharp className="h-5" />
            </HeaderButton>
          </div>
          <div className="absolute left-[50%] translate-x-[-50%] w-40 flex justify-between ">
            <HeaderButton onClick={() => navigate("/")}>Home</HeaderButton>
            <HeaderButton onClick={() => navigate("/annuaire")}>
              Annuaire
            </HeaderButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopNav;
