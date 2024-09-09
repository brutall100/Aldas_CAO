import Card from './Card';
import vkImage1 from '../img/VK_pasw3.png'; 
import vkImage2 from '../img/wolf.webp'; 
import vkImage3 from '../img/VK_cover13.png'; 
import vkImage4 from '../img/VK_cover14.png'; 
import vkImage5 from '../img/VK_pasw6.png'; 
import vkImage6 from '../img/VK_pasw2.png'; 
import '../css/Main.css';

const Main = () => {
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>Welcome to my portfolio app.</p>
            <div className="grid">
                <Card
                    imgUrl={vkImage1}
                    imgAlt="Placeholder 1"
                    title="Card Title 1"
                />
                <Card
                    imgUrl={vkImage2}
                    imgAlt="Placeholder 2"
                    title="Card Title 2"
                />
                <Card
                    imgUrl={vkImage3}
                    imgAlt="Placeholder 3"
                    title="Card Title 3"
                />
                <Card
                    imgUrl={vkImage4}
                    imgAlt="Placeholder 4"
                    title="Card Title 4"
                />
                <Card
                    imgUrl={vkImage5}
                    imgAlt="Placeholder 5"
                    title="Card Title 5"
                />
                <Card
                    imgUrl={vkImage6}
                    imgAlt="Placeholder 6"
                    title="Card Title 6"
                />
            </div>
        </div>
    );
};

export default Main;

