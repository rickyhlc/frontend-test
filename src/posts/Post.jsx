import { useState } from "react";
import CommentCard from "./CommentCard";

export default function Post({ postData }) {

  const [showingComments, setShowingComments] = useState(false);

  return (
    <div className="rounded-lg p-4 mb-4 shadow-md bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">{postData.title}</h2>
      <p className="text-gray-200">{postData.body}</p>
      <div className="text-right mt-4 text-sm text-gray-400">
        <button
          className="px-1 border-1 border-transparent rounded hover:border-blue-600 active:bg-blue-600 transition-colors duration-200"
          onClick={() => setShowingComments(!showingComments)}
        >
          {showingComments ? "hide comments" : "view comments"}
        </button>
      </div>
      {showingComments && <CommentCard postId={postData.id} />}
    </div>
  );
}