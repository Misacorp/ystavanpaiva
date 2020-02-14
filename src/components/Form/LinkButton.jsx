import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButton = styled(Link)`
  padding: 0.5rem;
  background-color: white;
  display: block;
  margin-top: 1rem;
  border-radius: 3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.dark};
  text-align: center;

  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'initial')};
  user-select: none;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0 3px 2px rgba(0, 0, 0, 0.15) inset;
    background-color: ${({ theme }) => theme.palette.primary.lighter};
  }
`;

export default LinkButton;
