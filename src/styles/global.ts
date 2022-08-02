import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #821515;
    --red-700: #C92A2A;
    --red-600: #FFE3E3;
    --red-500: #FFF5F5;
    --headline: #212529;
    --paragraph: #495057;
    --grey-500: #949494;
    
    --background: #F9F9F9;
    --bg-bege: #FFFAF1;
    --nav-height: 4.5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden auto;
  }  
  html{
    scroll-behavior: smooth;

  }
  body {
  font-family: 'Open Sans', sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background: var(--background);
  }

  p{
    font-size: 1.12rem;
    line-height: 150%;
    color: var(--paragraph);
  }

  button {
    border: none;
    border-radius: 0.9rem;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }

`
