import React from 'react';
import Card from './Card';
import '../css/Main.css';

// Dynamically import all images from the specified folder
const imagesContext = require.context('../img', false, /\.(webp|png|jpe?g)$/);
const images = imagesContext.keys().map((imagePath, index) => ({
    imgUrl: imagesContext(imagePath), 
    imgAlt: `Placeholder ${index + 1}`, 
    title: `Card Title ${index + 1}`
}));

const Main = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>Welcome to my portfolio app.</p>
            <div className="grid">
                {images.map((image, index) => (
                    <Card
                        key={index}
                        imgUrl={image.imgUrl}
                        imgAlt={image.imgAlt}
                        title={image.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main;

