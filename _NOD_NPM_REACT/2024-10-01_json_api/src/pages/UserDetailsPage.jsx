import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import API_ROUTE from '../utils/ApiRoute';

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(
      `${API_ROUTE}/users/${id}?_embed=posts`,
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data); 
      })
      
  }, [id]);
  

  if (!user) {
    const teal = '#008080';
    const loading = true;
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
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <h2>Addres: {user.address.street} {user.address.suite} {user.address.city}</h2>
      <h1>Posts</h1>
      <ol>
        {user.posts &&
          user.posts.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
      </ol>
    </div>
  );
};

export default UserDetailsPage;
