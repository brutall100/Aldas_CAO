import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AllCommentsPage = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
   axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [postId]);

  if (comments.length === 0) {
    return <p>Loading comments...</p>;
  }

  return (
    <div>
      <h1>All Comments for Post {postId}</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            <p>Email: {comment.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllCommentsPage;
