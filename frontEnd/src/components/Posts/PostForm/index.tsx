import React, { SyntheticEvent, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import api from "../../../utils/api";

// Todo: Modification post bugs ??
const PostForm = ({ edit = false }: { edit: boolean }) => {
  const [editPostId, setEditPostId] = useState<number>();
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<File>();

  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (edit) {
      const {
        postId,
        message: stateMessage,
        image: stateImage,
      } = location.state;
      setEditPostId(postId);
      setMessage(stateMessage);
      setImage(stateImage);
    }
  }, []);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const userId = Number(localStorage.getItem("groupomania-id"));

    const data = {
      userId,
      message,
      image,
    };

    if (!edit) {
      api.posts.create(data).then((res) => {
        if (res?.status === 200) {
          toast.success(` Post enregistré.`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          });
          setTimeout(() => navigate("/"), 3000);
          queryClient.invalidateQueries(["app", "posts"]);
        } else {
          toast.error(`${res?.error}`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        }
      });
    } else {
      api.posts.update(editPostId as number, data).then((res) => {
        if (res?.status === 200) {
          toast.success(` Post modifié.`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
          });
          setTimeout(() => navigate("/"), 3000);
          queryClient.invalidateQueries(["app", "posts"]);
        } else {
          toast.error(`${res?.error}`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
          });
        }
      });
    }
  };

  return (
    <div className="h-[100vh] flex flex-col pt-24 justify-start items-center">
      <ToastContainer />
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-2xl text-primary-300 font-bold">
          {!edit ? "Nouveau message" : "Modifier message"}
        </h1>
      </div>
      <div className="relative flex flex-col w-3/4 max-w-md h-[70%] rounded-xl backdrop-blur m-auto p-6 shadow-lg shadow-primary-100 ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full h-full mt-8  items-center justify-between"
        >
          <div>
            <textarea
              className="p-4"
              id="message"
              rows={10}
              placeholder="Nouveau message ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
              onChange={(e) => {
                if (e.target.files) setImage(e.target?.files[0]);
              }}
            />
          </div>
          <div className="flex justify-around  w-full">
            <Link to="/" className="btn w-28 ">
              Retour
            </Link>
            <button type="submit" className="btn w-28">
              {!edit ? "Envoyer" : "Modifier"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
