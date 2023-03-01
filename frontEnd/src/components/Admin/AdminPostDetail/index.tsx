import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete, CiEdit } from "react-icons/all";
import api from "../../../utils/api";
import { useQueryClient } from "react-query";

interface AdminPostDetailProps {
  post: {
    id: number;
    message: string;
    image: string;
  };
}

const AdminPostDetail = ({ post }: AdminPostDetailProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id: postId, message, image } = post;

  const handleDelete = () => {
    api.posts.delete(postId).then((res) => {
      if (res?.status === 200) {
        toast.success(` Post supprimé.`, {
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
  };

  return (
    <div className="flex items-center w-1/8 ">
      <ToastContainer />
      <Link
        to={`/post/${postId}/editpost`}
        state={{
          postId,
          message,
          image,
        }}
        className="btn w-6 h-6 mx-1 p-0 flex items-center justify-center"
      >
        <CiEdit className="h-4" />
      </Link>
      <button
        className="btn w-6 h-6 mx-1 p-0 flex items-center justify-center"
        onClick={handleDelete}
      >
        <AiOutlineDelete className="h-4" />
      </button>
    </div>
  );
};

export default AdminPostDetail;
