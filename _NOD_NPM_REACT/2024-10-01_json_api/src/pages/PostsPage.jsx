import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import './PostsPage.css';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false); // Set loading to false once data is fetched
      });
  }, []);

  if (loading) {
    // Spinner while loading
    const teal = '#008080';
    const override = {};

    return (
      <ClipLoader
        color={teal}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div>
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>{' '}
            </h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
