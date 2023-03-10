import React, { useState } from "react";
import { User } from "../../../utils/types";
import {
  AiFillStar,
  AiOutlineCloseCircle,
  BsInfoCircle,
} from "react-icons/all";

const AnnuaireCard = ({ user }: { user: User }) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const { username, image, admin, email, phoneNumber } = user;

  const toggleModal = () => setToggle(!toggle);

  const displayModal = toggle && (
    <div className="absolute top-0 right-0 left-0 bottom-0 z-20 backdrop-blur flex justify-center items-center  ">
      <div className="relative flex flex-col justify-between items-center w-5/6 h-1/2 my-2 mx-4 p-1 rounded-md  bg-primary-200 p-4 ">
        <AiOutlineCloseCircle
          className="h-5 absolute top-0 right-0 hover:text-primary-100 cursor-pointer"
          onClick={toggleModal}
        />
        <div className="flex flex-1 flex-col w-full  md:flex-row ">
          <div className="relative my-2 mx-auto">
            <img
              src={image}
              alt="profil"
              className=" shadow-md rounded-full h-32 w-32 "
            />
            {admin && (
              <AiFillStar className="absolute -top-0.5 -right-2 text-primary-300 h-8" />
            )}
          </div>
          <div className="flex-1 flex flex-col justify-around h-full">
            <h3 className="text-4xl font-bold">pseudo : {username}</h3>
            <p className="text-xl">email : {email}</p>
            <p className="text-xl">numéro de poste : {phoneNumber}</p>
          </div>
        </div>
        {/*{infos.admin && <AdminSection user={user} toggleFunc={toggleModal} />}*/}
      </div>
    </div>
  );

  return (
    <>
      <div className="relative flex justify-between items-center w-full max-w-[330px] h-28 my-2 mx-4 p-1 rounded-md  shadow-md shadow-slate-500 hover:shadow-slate-300  bg-slate-400">
        <BsInfoCircle
          className="h-5 absolute top-0 right-0 hover:text-primary-100 cursor-pointer"
          onClick={toggleModal}
        />
        <div className="relative ml-2 mb-auto">
          <img
            src={image}
            alt="profil"
            className=" shadow-md rounded-full h-14 w-14 "
          />
          {admin && (
            <AiFillStar className="absolute -top-0.5 -right-2 text-primary-300 h-5" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold">{username}</h3>
          <p>{email}</p>
          <p>{phoneNumber}</p>
        </div>
      </div>
      {displayModal}
    </>
  );
};

export default AnnuaireCard;
