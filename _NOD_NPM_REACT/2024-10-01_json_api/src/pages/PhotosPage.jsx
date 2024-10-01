import React, { useEffect, useState } from 'react';

const PhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then((response) => response.json())
        .then((data) => setPhotos(data));
    }, []);
    
    return (
        <div>
        <h1>Photos Page</h1>
        <ol>
            {photos.map((photo) => (
            <li key={photo.id}>
                <h2>{photo.title}</h2>
                <img src={photo.url} alt={photo.title} />
            </li>
            ))}
        </ol>
        </div>
    );

}

export default PhotosPage;
// Json placeholder