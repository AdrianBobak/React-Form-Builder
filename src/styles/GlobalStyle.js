import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: '#eee';
    font-family: 'Titillium Web', sans-serif;
  }
`;

export default GlobalStyle;