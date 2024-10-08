import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import '../styles/PostsPage.css';
import API_ROUTE from '../utils/ApiRoute';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [deleteMessage, setDeleteMessage] = useState(''); // Add state for delete message
  const [newTitle, setNewTitle] = useState(''); // State for new post title
  const [newBody, setNewBody] = useState(''); // State for new post body
  const [addMessage, setAddMessage] = useState(''); // State for add post message

  useEffect(() => {
    fetch(`${API_ROUTE}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false); 
      });
  }, []);

  const handleDelete = (id) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);

    fetch(`${API_ROUTE}/posts/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setDeleteMessage(`Post with ID ${id} was successfully deleted.`);
    })
    .catch(() => {
      setDeleteMessage('Error deleting post.');
    });
  };

  const handleAddPost = (e) => {
    e.preventDefault();

    const newPost = {
      title: newTitle,
      body: newBody,
    };

    fetch(`${API_ROUTE}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })
    .then(response => response.json())
    .then(data => {
      setPosts([...posts, data]); // Add new post to the list
      setAddMessage(`Post "${newTitle}" was successfully added.`);
      setNewTitle('');
      setNewBody('');
    })
    .catch(() => {
      setAddMessage('Error adding post.');
    });
  };

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
      {deleteMessage && <h2 style={{ color: 'green' }}>{deleteMessage}</h2>}
      {addMessage && <h2 style={{ color: 'green' }}>{addMessage}</h2>}
      
      {/* Add post form */}
      <form onSubmit={handleAddPost}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Post</button>
      </form>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>{' '}
            </h2>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;


