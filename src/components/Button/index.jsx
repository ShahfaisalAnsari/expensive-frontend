import React from 'react';
import styled from 'styled-components';
import MuiButton from '@mui/material/Button';

// Styled wrapper around MUI Button
const StyledButton = styled(MuiButton)`
  && {
    background-color: #1976d2;
    color: white;
    padding: 8px 16px;
    font-weight: bold;
    text-transform: none;

    &:hover {
      background-color: #115293;
    }
  }
`;

const Button = ({ children, onClick, variant = "contained" }) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
