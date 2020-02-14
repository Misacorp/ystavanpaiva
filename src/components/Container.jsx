import styled from 'styled-components';

const Container = styled.div`
  overflow: hidden;
  max-width: 100%;
  border-radius: 2rem;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.3),
    rgba(255, 255, 255, 0.15)
  );
  padding: 2rem;
  color: ${({ theme }) => theme.palette.primary.dark};

  & > p {
    text-align: left;
  }
`;

export default Container;
