import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    height: auto;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.base.fontFamily};
    width: 100%;
    min-height: 100%;


    height: 100vh;
    text-align: center;
    background: linear-gradient(#ffe1d9, #ffbb89);
    border-radius: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1, h2 {
    font-family: ${({ theme }) => theme.typography.title.fontFamily};
  }
`;

export default GlobalStyles;
