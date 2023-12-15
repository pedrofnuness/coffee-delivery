import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.background};
    color: ${props => props.theme['base-text']};
    --webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 130%;
  }

  body, button, input {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  } 
`;