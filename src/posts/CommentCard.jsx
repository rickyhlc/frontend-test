import { useState, Suspense } from "react";
import CommentList from "./CommentList";

export default function CommentCard({ postId }) {

  // get data on card load, assuming postId won't change so no need to use useEffect
  const [commentsPromise] = useState(() => fetchComments(postId));

  return (
    <div className="rounded-lg mt-4 bg-zinc-800">
      <Suspense fallback={<div className="text-center p-4">Loading comments...</div>}>
        <CommentList commentsPromise={commentsPromise} />
      </Suspense>
    </div>
  )
}

const fetchComments = async (postId) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
};