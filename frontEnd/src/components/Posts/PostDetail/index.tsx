import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsChevronLeft } from "react-icons/all";
import { Post } from "../../../utils/types";
import AdminPostDetail from "../../Admin/AdminPostDetail";
import Like from "../Like";
import CommentCard from "../Comments/CommentCard";

const PostDetail = () => {
  const userId = localStorage.getItem("groupomania-id");
  const { post } = useLocation().state;
  const { id: postId, message, image, comments, likes } = post as Post;

  console.log("post -> ", post);
  return (
    <div className="h-[100vh] w-full flex flex-col pt-24 justify-start items-center ">
      <div className="w-full backdrop-blur py-2 shadow-md">
        <h1 className="text-3xl text-primary-300 font-bold">POSTS detail</h1>
      </div>
      <div className="w-5/6 my-4 p-4 backdrop-blur rounded shadow-md ">
        <div className="flex w-full justify-between my-2 mx-4  ">
          <Link
            to={"/"}
            className="btn w-6 h-6 mx-1 p-0 flex items-center justify-center "
          >
            <BsChevronLeft className="h-5" />
          </Link>
          {post.userId.toString() === userId ? (
            <AdminPostDetail post={{ id: postId, message, image }} />
          ) : (
            <Like postId={postId} likes={likes} userId={Number(userId)} />
          )}
        </div>
        <div className="flex flex-col border-b-2 border-primary-200 md:flex-row md:w-full ">
          <div className="my-4">
            {image ? (
              <img
                src={image}
                alt={postId.toString()}
                className="mx-auto w-3/4 max-w-[340px] md:max-w-xl "
              />
            ) : null}
          </div>
          <div className="my-4 md:flex md:flex-1 md:justify-start ">
            {message ? <p className="text-xl">{message}</p> : null}
          </div>
        </div>

        <div className="w-full my-4 ">
          <span>
            <Link
              to={`/post/${postId}/newcomment`}
              state={{
                postId,
                userId,
              }}
              className="btn w-60 m-2 "
            >
              nouveau commentaire
            </Link>
          </span>
          <div className="flex flex-wrap justify-center mt-2 mx-auto overflow-y-auto h-60 w-7/8">
            {userId && comments.length > 0
              ? comments.map((comment, index) => (
                  <CommentCard
                    key={index}
                    comment={comment}
                    userId={parseInt(userId)}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
