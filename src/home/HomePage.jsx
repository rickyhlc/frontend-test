import { useNavigate } from "react-router";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div className="h-full flex items-center justify-center gap-10">
      <button
        className="mainBtn"
        onClick={() => navigate("/posts")}
      >
        Get Posts
      </button>
      <button
        className="mainBtn"
        onClick={() => navigate("/randomAnimals")}
      >
        Get Animals
      </button>
    </div>
  )
}