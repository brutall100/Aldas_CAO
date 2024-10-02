import './Header.css';
import { NavLink } from 'react-router-dom'; 

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/stories">Stories</NavLink></li>
                    <li><NavLink to="/video">Videos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
