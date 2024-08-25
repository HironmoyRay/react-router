import {useNavigate} from "react-router-dom"
const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate(`/posts/${id}`)
  }
  return (
    <div className="text-center text-white p-4 bg-rose-700 rounded-xl flex flex-col">
      <h1 className="text-2xl border-b-2">{id}</h1>
      <h2 className="font-semibold flex-1">{title}</h2>

      <button onClick={handleNavigate} className="border-2 rounded px-2 my-2">Show Details</button>
    </div>
  );
};

export default Post;
