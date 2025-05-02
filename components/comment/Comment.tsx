"use client";

import { useEffect, useState } from "react";
import "../../components/styles/comment.css";
import CommentList from "./subcomponents/CommentList";
import { CommentType } from "@/types/comment";
import CommentForm from "./subcomponents/CommentForm";
import comments from "@/data/comment";

interface CommentProps {
  projectId: string;
}

const Comment = ({ projectId }: CommentProps) => {
  const [commentList, setCommentList] = useState<CommentType[]>([]);

  const fetchComments = () => {
    const filtered = comments.filter(
      (comment) => comment.project === Number(projectId)
    );
    setCommentList(filtered);
  };

  useEffect(() => {
    fetchComments();
  }, [projectId]);

  return (
    <div className="comments-section">
      <h2 className="comments-title">피드백</h2>
      <CommentForm projectId={projectId} />
      <CommentList comments={commentList} />
    </div>
  );
};

export default Comment;
