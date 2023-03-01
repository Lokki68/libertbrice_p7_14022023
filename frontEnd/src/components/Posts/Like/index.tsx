import React, { useEffect, useState } from "react";
import { Like } from "../../../utils/types";
import { AiFillHeart, AiOutlineHeart } from "react-icons/all";

interface LikeProps {
  postId: number;
  userId: number;
  likes: Like[];
}

const LikeComponent = ({ postId, likes, userId }: LikeProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [userLikedId, setUserLikedId] = useState<number>();

  useEffect(() => {
    const result = likes.filter((like) => like.userId === userId);

    if (result.length >= 1) {
      setUserLikedId(result[0].id);
      setIsLiked(true);
    }
  }, [likes]);
  const handleLike = () => {};
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
