import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme }) => css`
      color: ${theme.colors.gray[100]};
      background-color: ${theme.colors.gray[800]};
    `}

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body, input, textarea, button {
    ${({ theme }) => css`
      font-family: ${theme.font.family.primary};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.weight.regular};
    `}
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  :focus {
    outline: none;
    ${({ theme }) => css`
      box-shadow: 0 0 0 2px ${theme.colors.gray[100]},
        0 0 0 6px rgba(255, 144, 0, 0.5);
    `}
  }
`;

export default GlobalStyles;
