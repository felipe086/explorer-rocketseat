import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *	{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-synthesis: none;
    text-rendering: optimizedLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%
  }

  img	{
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    font-style: italic;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body,input,button,textarea {
    font-family: "Roboto Slab", serif;
    outline: none;
    font-size: 1rem;
  }

  a {
    text-decoration: none;
  }

  button,a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button {
    border: none;
  }

  button:hover,a:hover {
    filter: brightness(0.9);
  }

`
