import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/albums?_embed=user')
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div>
      <h1>Albums Page</h1>
      <h2>Total albums: <span style={{ color: 'red' }}>{albums.length}</span></h2>
      <ol>
        {albums.map((album) => (
          <li key={album.id}>
            <h2>{album.title}</h2>
            <p>
              User: 
              <Link to={`/users/${album.user.id}`}>
                {album.user.name}
              </Link>
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AlbumsPage;

