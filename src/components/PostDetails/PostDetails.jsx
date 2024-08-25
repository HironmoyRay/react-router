import { useLoaderData, useNavigate } from "react-router-dom";
const PostDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const details = useLoaderData();
  const { userId, id, title, body } = details;
  return (
    <div className="m-10 bg-rose-700 p-10 text-white rounded-xl">
      <h3>Category: {userId}</h3>
      <h1>Id: {id}</h1>
      <p>Title: {title}</p>
      <p>Details: {body}</p>
      <button onClick={handleGoBack} className="border-2 px-4 rounded my-4">
        Go Back
      </button>
    </div>
  );
};

export default PostDetails;
