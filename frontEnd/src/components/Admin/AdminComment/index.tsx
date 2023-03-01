import React from "react";
import { Comment } from "../../../utils/types";

interface AdminCommentProps {
  comment: Comment;
}

const AdminComment = ({ comment }: AdminCommentProps) => {
  console.log("comment ->", comment);
  return <div>Index</div>;
};

export default AdminComment;
