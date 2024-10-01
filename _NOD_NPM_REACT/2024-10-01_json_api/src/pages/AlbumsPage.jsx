import React, { useEffect, useState } from 'react';

const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div>
      <h1>Albums Page</h1>
      <ol>
        {albums.map((album) => (
          <li key={album.id}>
            <h2>{album.title}</h2>
          </li>
        ))}
      </ol>
    </div>
  );

};

export default AlbumsPage;


// Json placeholder