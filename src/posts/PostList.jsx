import { useState, use } from "react";
import ReactPaginate from "react-paginate";
import Post from "./Post";

import "./PostList.css";

export default function PostList({ allPostsPromise }) {

  const allPosts = use(allPostsPromise);
  const itemsPerPage = 20;
  const [currentPosts, setCurrentPosts] = useState(allPosts?.slice(0, itemsPerPage));

  const handlePageChange = (event) => {
    const startIndex = event.selected * itemsPerPage;
    setCurrentPosts(allPosts.slice(startIndex, startIndex + itemsPerPage));
  }

  if (allPosts === null) {
    // handle fetch error
    return (
      <div className="h-full flex items-center">Unable to load posts, please try again later</div>
    );
  } else {
    return (
      <>
        <div className="grow-1 basis-0 overflow-auto p-10">
          {currentPosts.map(p => <Post key={p.id} postData={p} />)}
        </div>
        <ReactPaginate
          className="w-full px-5 py-3 list-none text-right bg-blue-900"
          nextLabel="next >"
          previousLabel="< previous"
          breakLabel="..."
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          pageCount={Math.ceil(allPosts.length / itemsPerPage)}
        />
      </>
    );
  }
}