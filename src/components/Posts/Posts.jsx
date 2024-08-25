import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";
const Posts = () => {
  const allPosts = useLoaderData();
  return (
    <div className="p-10">
      <h1 className="text-center font-semibold text-2xl">
        Posts: {allPosts.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {allPosts.map((post) => (
          <Post key={post.it} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
