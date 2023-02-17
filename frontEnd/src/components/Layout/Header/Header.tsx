import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import { useQuery } from "react-query";
import api from "../../../utils/api";
import NavContainer from "./Navigations/NavContainer";
import ConnectionNav from "./Navigations/ConnectionNav";

const Header = () => {
  const id = Number(localStorage.getItem("groupomania-id"));
  const { data: user, isSuccess } = useQuery(
    ["app", "user", id],
    () => api.user.info(id),
    {
      staleTime: Infinity,
      enabled: !!id,
    }
  );
  console.log(user);

  return (
    <div className="fixed z-30  flex flex-col justify-start w-full h-20 bg-primary-300 shadow-sm">
      <div className="flex justify-center items-center my-2 mx-2.5">
        <RiGlobalLine className="text-2xl text-white" />
        <p className="text-white font-bold text-2xl">Groupomania</p>
      </div>
      {isSuccess ? <NavContainer info={user.data} /> : <ConnectionNav />}
    </div>
  );
};

export default Header;
