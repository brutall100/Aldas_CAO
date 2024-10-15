import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_ROUTE from '../utils/ApiRoute';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #83b7e3;
  padding: 20px;
  border-radius: 10px;
`;

const StyledH1 = styled.h1`
  font-size: 2.5em;
  color: #004080; 
  text-align: center;
  margin-bottom: 20px;
`;

const StyledH2 = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  font-weight: 700;
`;

const RedSpan = styled.span`
  color: red;
`;

const StyledAlbum = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 #ccc;
  background-color: #63a0aa;
  color: #333;
  font-size: 1.2em;
  font-weight: 500;
  line-height: 1.5em;
  text-align: left;
  list-style-type: none;
  a {
    color: #333;
    text-decoration: none;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
      color: #004080;
    }
  }
`;


const AlbumsPage = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios(`${API_ROUTE}/albums?_embed=user`)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error('Error fetching albums:', error));
  }, []);

  return (
    <StyledDiv>
      <StyledH1>Albums Page</StyledH1>
      <StyledH2>
        Total albums: <RedSpan>{albums.length}</RedSpan>
      </StyledH2>
      <ol>
        {albums.map((album) => (
          <StyledAlbum key={album.id}>
            <h2>{album.title}</h2>
            <p>
              User: 
              <Link to={`/users/${album.user.id}`}>
                {album.user.name}
              </Link>
            </p>
          </StyledAlbum>
        ))}
      </ol>
    </StyledDiv>
  );
};

export default AlbumsPage;




