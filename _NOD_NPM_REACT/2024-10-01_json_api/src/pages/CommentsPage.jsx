import React, { useEffect, useState } from 'react';

const CommentsPage = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h1>Comments Page</h1>
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );

 
};

export default CommentsPage;


// Json placeholder