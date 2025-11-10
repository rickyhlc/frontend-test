export default function Comment({ commentData }) {
  return (
    <div className="p-4">
      <h3 className="text-xs">
        <span className="font-bold text-gray-400">
          {commentData.name}
        </span>
        <span className="ms-1 text-gray-500">
          ({commentData.email})
        </span>
      </h3>
      <p className="text-sm text-gray-200">{commentData.body}</p>
    </div>
  );
}