// src/components/NotFound.jsx

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  padding: 20px;
`;

const ErrorCode = styled.h1`
  font-size: 10rem;
  color: #ff4d4f;
  margin: 0;
`;

const ErrorText = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  background-color: #ff4d4f;
  color: #fff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background-color: #d9363e;
  }
`;

 const NotFound = () => {
  return (
    <NotFoundWrapper>
      <ErrorCode>404</ErrorCode>
      <ErrorText>Page Not Found</ErrorText>
      <Description>Sorry, the page you're looking for doesn't exist.</Description>
      <HomeLink to="/">Go Back Home</HomeLink>
    </NotFoundWrapper>
  );
};


export default NotFound;