import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const HeaderContainer = styled.header`
  background-color: #333;
  padding: 15px;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 500;
  padding: 10px 15px;
  transition: background-color 0.3s ease;

  &.active-link {
    background-color: #007bff;
    border-radius: 5px;
  }

  &:hover {
    background-color: #555;
    border-radius: 5px;
  }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <NavList>
                    <NavItem><StyledNavLink exact to="/" activeClassName="active-link">Home</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to="/cars" activeClassName="active-link">Cars</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to="/cities" activeClassName="active-link">Cities</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to="/users" activeClassName="active-link">Users</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to="/posts" activeClassName="active-link">Posts</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to="/comments" activeClassName="active-link">Comments</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to="/albums" activeClassName="active-link">Albums</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to="/photos" activeClassName="active-link">Photos</StyledNavLink></NavItem>
                    <NavItem><StyledNavLink to="/todos" activeClassName="active-link">Todos</StyledNavLink></NavItem>
                </NavList>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;

