import './Header.css';
import { NavLink } from 'react-router-dom'; 

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="nav-links">
                    <li><NavLink exact to="/" activeClassName="active-link">Home</NavLink></li>
                    <li><NavLink to="/cars" activeClassName="active-link">Cars</NavLink></li>
                    <li><NavLink to="/cities" activeClassName="active-link">Cities</NavLink></li>
                    <li><NavLink to="/users" activeClassName="active-link">Users</NavLink></li>
                    <li><NavLink to="/posts" activeClassName="active-link">Posts</NavLink></li>
                    <li><NavLink to="/comments" activeClassName="active-link">Comments</NavLink></li>
                    <li><NavLink to="/albums" activeClassName="active-link">Albums</NavLink></li>
                    <li><NavLink to="/photos" activeClassName="active-link">Photos</NavLink></li>
                    <li><NavLink to="/todos" activeClassName="active-link">Todos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
