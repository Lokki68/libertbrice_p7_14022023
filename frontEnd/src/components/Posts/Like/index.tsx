import React, { useEffect, useState } from "react";
import { Like } from "../../../utils/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/all";
import { useMutation, useQueryClient } from "react-query";
import api from "../../../utils/api";

interface LikeProps {
  postId: number;
  userId: number;
  likes: Like[];
}

const LikeComponent = ({ postId, likes, userId }: LikeProps) => {
  const queryClient = useQueryClient();

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [userLikedId, setUserLikedId] = useState<number>();

  const likePost = useMutation({
    mutationFn: () => api.posts.like({ postId, userId }),
    onSuccess: () => {
      queryClient.invalidateQueries(["app", "posts"]),
        queryClient.invalidateQueries(["app", "post", postId]);
    },
  });

  const unLikePost = useMutation({
    mutationFn: (id: number) => api.posts.unlike(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["app", "posts"]),
        queryClient.invalidateQueries(["app", "post", postId]);
    },
  });

  useEffect(() => {
    const result = likes.filter((like) => like.userId === userId);

    if (result.length >= 1) {
      setUserLikedId(result[0].id);
      setIsLiked(true);
    }
  }, [likes]);
  const handleLike = () => {
    if (userLikedId) {
      unLikePost.mutate(userLikedId);
      setIsLiked(!isLiked);
      setUserLikedId(0);
    } else {
      likePost.mutate();
    }
  };

  return (
    <>
      <button className="h-8 aspect-square" onClick={handleLike}>
        {isLiked ? (
          <AiFillHeart className="text-success " />
        ) : (
          <AiOutlineHeart className="text-gray-400 " />
        )}
      </button>
    </>
  );
};

export default LikeComponent;
