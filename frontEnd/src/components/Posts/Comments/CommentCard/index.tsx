import React, { useEffect, useState } from "react";
import { Comment } from "../../../../utils/types";
import { timeAgo } from "../../../../utils/utils";
import { useQuery } from "react-query";
import api from "../../../../utils/api";
import AdminComment from "../../../Admin/AdminComment";

interface CommentCardProps {
  comment: Comment;
  userId: number;
}

const CommentCard = ({ comment, userId }: CommentCardProps) => {
  const [commenterUsername, setCommenterUsername] = useState<string>("");

  const { data: users } = useQuery(["app", "users"], () => api.user.showAll(), {
    staleTime: Infinity,
  });

  useEffect(() => {
    if (users && users.length > 1) {
      const user = users.filter((user) => user.id === comment.userId);
      setCommenterUsername(user[0].username);
    }
  }, [users]);

  const dateFormated = timeAgo(comment.date);

  const displayAdmin = userId === comment.userId && (
    <AdminComment comment={comment} />
  );
  return (
    <>
      <div className="grid grid-cols-comment min-h-20 max-h-40 w-full mx-2 py-2 border-b-2  ">
        <div className="flex flex-col justify-center items-center mx-auto text-primary-300">
          <span className="font-bold">{commenterUsername}</span>
          <span className="text-xs">{dateFormated}</span>
        </div>
        <div className="flex items-center">
          <p>{comment.content}</p>
        </div>
        <div>{displayAdmin}</div>
      </div>
    </>
  );
};

export default CommentCard;
