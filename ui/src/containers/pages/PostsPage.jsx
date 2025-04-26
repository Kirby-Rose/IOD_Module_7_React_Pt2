import { Outlet, useParams, Link, useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

// save as pages/PostsPage.jsx
export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [data, isLoading] = useQuery(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  // the ? means only call map if postsData is not null
  const postList = data?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return <ul>{postList}</ul>;
}

// add to PostsPage.jsx
export function Post() {
  const navigate = useNavigate();
  const { id } = useParams(); // custom hook to access dynamic params
  const [data, isLoading] = useQuery(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  const goToNext = () => {
    navigate(`/posts/${parseInt(id) + 1}`);
  };
  return (
    <div className="Post">
      {data && !isLoading ? (
        <>
          <h3>
            Post #{data.id}: {data.title}
          </h3>
          <p>{data.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
      <button onClick={goToNext}>To Next Post</button>
    </div>
  );
}
// ++ Add a Next Post button to the Post component
