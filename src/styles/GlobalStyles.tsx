import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
}
* {
    margin: 0; 
    padding: 0;
    border: 0;
}

html, body, #root {
    height: 100%;
}


:root {
  --step--2: clamp(0.91rem, 0.89rem + 0.10vw, 0.96rem);
  --step--1: clamp(1.09rem, 1.05rem + 0.21vw, 1.20rem);
  --step-0: clamp(1.31rem, 1.24rem + 0.37vw, 1.50rem);
  --step-1: clamp(1.58rem, 1.46rem + 0.59vw, 1.88rem);
  --step-2: clamp(1.89rem, 1.71rem + 0.89vw, 2.34rem);
  --step-3: clamp(2.27rem, 2.01rem + 1.29vw, 2.93rem);
  --step-4: clamp(2.72rem, 2.36rem + 1.83vw, 3.66rem);
  --step-5: clamp(3.27rem, 2.75rem + 2.56vw, 4.58rem);
  --gray-1: hsl(40, 23%, 97%);
  --red-1: hsl(360, 100%, 97%);
  --red-2: hsl(360, 67%, 44%);
  --cyan-1: hsl(185, 94%, 87%);
  
}

body {
    line-height: 1.5;
    font-family: "Inter", sans-serif;
    overflow-y: none;
}

img, picture, svg {
    display: block;
    max-width: 100%;
}

input, button {
    font: inherit;
}

p, h1, h2, h3 ,h4, h5, h6 {
    overflow-wrap: break-word;
    max-width: 60ch;
}

ul {
    list-style: none;
}

a {
    color: var(--cyan-1);
}
#root {
    isolation: isolate;
}

@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


`;

export default GlobalStyles;
