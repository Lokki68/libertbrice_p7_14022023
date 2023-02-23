import React from "react";
import { Post } from "../../utils/types";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import api from "../../utils/api";
import PostCard from "./PostCard";
import TitleBar from "../UiComponents/TitleBar";

const Posts = ({ posts }: { posts: Post[] }) => {
  const { data: users } = useQuery(["app", "users"], () => api.user.showAll(), {
    staleTime: Infinity,
  });

  return (
    <div className="h-[100vh] w-full flex flex-col pt-24 justify-start items-center ">
      <TitleBar>Posts</TitleBar>
      <div className="flex items-center backdrop-blur mt-4 rounded-full shadow-md px-6 py-3 mx-10  my-4 flew-grow max-w-3xl">
        <Link to="/post/newpost" className="btn w-40">
          Nouveau post ...
        </Link>
      </div>
      <div className="flex flex-wrap justify-center overflow-x-scroll w-full">
        {posts && users?.data ? (
          posts.map((post) => (
            <PostCard key={post.id} post={post} users={users.data} />
          ))
        ) : (
          <p>Pas de post pour le moment ...</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
