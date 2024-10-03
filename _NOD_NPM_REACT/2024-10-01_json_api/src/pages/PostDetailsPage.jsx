import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch post details
    fetch(`http://localhost:3000/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));

    // Fetch comments for the post
    fetch(
      `http://localhost:3000/posts/${postId}/comments`,
    )
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, [postId]);

  if (!post) {
    return <p>Loading post details...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* Display some comments */}
      <h2>Comments</h2>
      <ul>
        {comments.slice(0, 3).map(
          (
            comment, // Show first 3 comments as a preview
          ) => (
            <li key={comment.id}>
              <p>{comment.name}</p>
              <p>{comment.body}</p>
            </li>
          ),
        )}
      </ul>
      {/* Link to All Comments page */}
      <Link to={`/posts/${postId}/comments`}>
        View All Comments
      </Link>{' '}
      {/* Link to comments page */}
    </div>
  );
};

export default PostDetailsPage;
