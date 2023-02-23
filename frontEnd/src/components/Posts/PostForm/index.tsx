import React from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const PostForm = () => {
  function handleSubmit() {}

  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center">
      <ToastContainer />
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-2xl text-primary-300 font-bold">
          {false ? "Nouveau message" : "Modifier message"}
        </h1>
      </div>
      <div className="relative flex flex-col w-3/4 max-w-md h-[70%] rounded-xl backdrop-blur m-auto p-6 shadow-lg shadow-primary-100 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full mt-8  items-center justify-between"
        >
          <div>
            <textarea
              id="message"
              rows={10}
              placeholder="Nouveau message ..."
            ></textarea>
          </div>
          <div>
            <label htmlFor="fileSelector" className="btn w-3/4 ">
              Envoyer une image
            </label>
            <input
              type="file"
              id="fileSelector"
              className="hidden"
              accept=".jpg, .jpeg, .png"
            />
          </div>
          <div className="flex justify-around  w-full">
            <Link to="/" className="btn w-28 ">
              Retour
            </Link>
            <button className="btn w-28" type="submit">
              {true ? "Modifier" : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
