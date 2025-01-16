import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Carmen Sans';
      src: url('/Brucke/assets/fonts/carmen-sans.otf') format('opentype');
      font-weight: normal;
      font-style: normal;
  }
  :root {
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    --primary: #1f1f1f;
    --secondary:  #b8b9b9;
    --text: white;
    --accent: #e6b03d;

  }

  body {
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background-color: black;
    font-family: 'Quicksand';
  }
  a {
    text-decoration: none;
    color: var(--text);
    }

  h2 {
    @media (max-width: 768px) {
    }
  }

  p{
    @media (max-width: 768px) {
    }
  }
`;

export const Img = styled.div`
  background-color: blue;
  display: block;
  width: 50%;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 848px) {
    width: 100%;
    height: 50%;
  }
`;

export default GlobalStyle;
