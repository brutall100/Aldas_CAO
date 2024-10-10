import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_ROUTE from '../utils/ApiRoute';

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios(`${API_ROUTE}/albums?_embed=user`)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error('Error fetching albums:', error));
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

