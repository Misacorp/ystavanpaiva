import styled from 'styled-components';

const Input = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.primary.dark};
  font-size: 1rem;
  font-family: ${({ theme }) => theme.typography.base.fontFamily};}

  &,
  &::placeholder {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export default Input;
