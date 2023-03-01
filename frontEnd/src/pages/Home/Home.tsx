import React from "react";
import { RiGlobalLine } from "react-icons/ri";
import { useQuery } from "react-query";
import api from "../../utils/api";
import Posts from "../../components/Posts";

const Home = () => {
  const { data: posts, isSuccess } = useQuery(
    ["app", "posts"],
    () => api.posts.showAll(),
    {
      staleTime: Infinity,
    }
  );

  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center ">
      {isSuccess && posts ? (
        <Posts posts={posts} />
      ) : (
        <>
          <RiGlobalLine />
          <h1>Bienvenue sur Goupomania</h1>
        </>
      )}
    </div>
  );
};

export default Home;
