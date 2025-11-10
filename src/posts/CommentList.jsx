import { use } from "react";
import Comment from "./Comment";

export default function CommentList({ commentsPromise }) {
  const allComments = use(commentsPromise);

  if (allComments === null) {
    // handle fetch error
    return (
      <div className="text-center p-4">Unable to load comments, please try again later</div>
    );
  } else {
    return <>
      {allComments.map(c => <Comment key={c.id} commentData={c} />)}
    </>;
  }
}