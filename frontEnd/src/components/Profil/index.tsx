import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/types";
import ProfilCard from "./ProfilCard";

const Profil = () => {
  const { infos } = useSelector((state: RootState) => state.user);

  console.log(infos);
  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center">
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-3xl text-primary-300 font-bold">PROFIL</h1>
      </div>

      {infos ? (
        <ProfilCard infos={infos} />
      ) : (
        <p className="animate-pulse">Loading ...</p>
      )}
    </div>
  );
};

export default Profil;
