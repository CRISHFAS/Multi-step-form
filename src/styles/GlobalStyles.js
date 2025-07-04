import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  xs: "320px", 
  sm: "768px", 
  md: "992px",
  lg: "1200px",
  xl: "1440px", 
};

const GlobalStyles = createGlobalStyle`



body{
  font-family: 'Ubuntu', sans-serif;
  background-color: var(--magnolia);
  color: var(marine-blue) ;
}


:root{
--marine-blue: hsl(0, 0.00%, 100.00%);
--purplish-blue: hsl(243, 100.00%, 50.00%);
--pastel-blue: hsl(0, 0.00%, 0.00%);
--light-blue: hsl(0, 0.00%, 0.00%);
--strawberry-red: hsl(354, 84%, 57%);


--cool-gray: hsl(231, 11%, 63%);
--light-gray: hsl(229, 24%, 87%);
--magnolia: hsl(0, 0.00%, 0.00%);
--alabaster: hsl(0, 0.00%, 0.00%);
--white: hsl(0, 0.00%, 0.00%);
}

.sr-only{
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/////////////////
//Reset//
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  overflow-wrap: break-word;
  hyphens: auto;
}

ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Set core root defaults */
html {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  transition: color 0.3s, background-color 0.3s;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  -webkit-text-decoration-skip: ink;
  text-decoration-skip-ink: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: black;
  color: black;
}

/* select:disabled,
input:disabled {
    background-color: gray;
    color: gray;
} */
  

button{
  cursor: pointer;
}

button:has(svg) {
    line-height: 0;
  }

*:disabled {
    cursor: not-allowed;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    -webkit-animation-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
    -webkit-transition-duration: 0.01ms !important;
    -o-transition-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    background-color: var(--alabaster) !important;
  }
}
`;

export default GlobalStyles;