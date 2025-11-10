import { useState, Suspense } from "react";
import PostList from "./PostList";

export default function PostsPage() {

  // get data on page load
  const [allPostsPromise] = useState(() => fetchPosts());

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Suspense fallback={<div className="h-full flex items-center">Loading posts...</div>}>
        <PostList allPostsPromise={allPostsPromise} />
      </Suspense>
    </div>
  )
}

const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return response.json();
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
};