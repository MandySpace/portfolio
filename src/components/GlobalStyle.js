import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: none;
}

::-webkit-scrollbar {
  width: 10px;
 
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #88888857;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #55555557;
  border-radius: 10px;
}

body {
    font-family: 'Inter', sans-serif;
    background: radial-gradient( #252525,#161616);
    background-attachment: fixed;
    /* background: #1b1b1b; */
    /* background:#07101f; */
    color: white;
    overflow:hidden;
}

button {
    font-family: 'Inconsolata', monospace;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    /* border-radius: 5px; */
    background: transparent;
    color: white;
    transition: all 0.5s ease;

    &:hover {
        background-color: #23d99634;
    }
}

h2 {
    font-weight: lighter;
    font-size: 6rem;
    }

h3 {
    color: white;
}

h4 {
    font-weight: bold;
    font-size: 2rem;
}

a {
    font-size: 1.1rem;;
}

span {
    font-weight: bold;
    color: #23d997;
}

p {
    padding: 3rem 0;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 1.6 ;
}


.trail {
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  z-index: 1000;
  border: 3px solid #23d997;
  background: transparent;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0.2;
  /* backdrop-filter: invert(0.7); */

}

.trail:nth-child(12) {
  backdrop-filter: invert(0.7);
  opacity: 1;
}
`;

export default GlobalStyle;
