import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_ROUTE from '../utils/ApiRoute';
import styled from 'styled-components';

// Styled components
const StyledPage = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
`;

const StyledH1 = styled.h1`
  font-size: 2em;
  color: #004080;
  text-align: center;
  margin-bottom: 20px;
`;

const CommentList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CommentItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CommentTitle = styled.h3`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const CommentBody = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
`;

const CommentEmail = styled.p`
  font-size: 0.9em;
  color: #888;
`;

// Component
const AllCommentsPage = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`${API_ROUTE}/${postId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [postId]);

  if (comments.length === 0) {
    return <p>Loading comments...</p>;
  }

  return (
    <StyledPage>
      <StyledH1>All Comments for Post {postId}</StyledH1>
      <CommentList>
        {comments.map((comment) => (
          <CommentItem key={comment.id}>
            <CommentTitle>{comment.name}</CommentTitle>
            <CommentBody>{comment.body}</CommentBody>
            <CommentEmail>Email: {comment.email}</CommentEmail>
          </CommentItem>
        ))}
      </CommentList>
    </StyledPage>
  );
};

export default AllCommentsPage;

