import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const CommentDetailsPage = () => {
  const { commentId } = useParams();
  const [comment, setComment] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch comment
    fetch(
      `http://localhost:3000/comments/${commentId}`,
    )
      .then((response) => response.json())
      .then((commentData) => {
        setComment(commentData);
        // Fetch the post based on the postId from the comment
        return fetch(
          `http://localhost:3000/posts/${commentData.postId}`,
        );
      })
      .then((response) => response.json())
      .then((postData) => {
        // Fetch the user data based on the userId from the post
        return fetch(
          `http://localhost:3000/users/${postData.userId}`,
        );
      })
      .then((response) => response.json())
      .then((userData) => setUser(userData));
  }, [commentId]);

  if (!comment || !user) {
    return <p>Loading comment and user details...</p>;
  }

  return (
    <>
      <div>
        <h1>{comment.name}</h1>
        <p>Comment ID: {comment.id}</p>
        <p>{comment.body}</p>
        <p>
          User ID:{' '}
          <Link to={`/users/${user.id}`}>
            {user.id}
          </Link>
        </p>
        <p>
          User Name:{' '}
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </p>
        <p>User Email: {user.email}</p>
      </div>
    </>
  );
};

export default CommentDetailsPage;
