import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch('http://localhost:3000/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false); // Set loading to false when data is fetched
      });
  }, []);

  if (loading) {
    // Display spinner while loading
    const teal = '#008080';
    const override = {};

    return (
      <BounceLoader
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
      <h1>Comments Page</h1>
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>
              <Link to={`/comments/${comment.id}`}>
                {comment.name}
              </Link>
            </h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CommentsPage;
