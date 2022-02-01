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

html{
  font-size: 100%;

  @media screen and (max-width:125em){
    font-size: 80%;
  }

  @media screen and (max-width:93.75em){
    font-size: 60%;
  }

  @media screen and (max-width:75em){
    font-size: 50%;
  }

  /* @media screen and (max-width:50em){
    font-size: 45%;
  } */

  /* @media screen and (max-width:40.625em){
    font-size: 36%;
  }

  @media screen and (max-width:25em){
    font-size: 33%;
  } */
}

body {
    font-family: 'Inter', sans-serif;
    background: radial-gradient( #252525,#161616);
    background-attachment: fixed;
    /* background: #1b1b1b; */
    /* background:#07101f; */
    color: white;
    
}

button {
    font-family: 'Inconsolata', monospace;
    font-weight: bold;
    font-size: 1.1rem;
    padding: 1em 2em;
    border: 3px solid #23d997;
    /* border-radius: 5px; */
    background: transparent;
    color: white;
    transition: all 0.5s ease;

    &:hover {
        background-color: #23d99634;
    }


    @media screen and (max-width:93.75em){
      border: 2px solid #23d997;
    }

    @media screen and (max-width:75em){
      /* font-size: 1.2rem; */
    }
}

h2 {
    font-weight: lighter;
    font-size: 6rem;

    @media screen and (max-width:37.5em){
      font-size: 4.5rem;
    }

    @media screen and (max-width: 25em) {
    font-size: 4rem;
     }
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

button, a {
  &:focus{
      outline: none;
      outline: 2px solid #23d997;
      outline-offset: 2px;

      @media screen and (max-width: 62.5em){
        outline: none;
      }
    }
}


.trail {
  width: 1.875rem;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  z-index: 1000;
  border: 3px solid #23d997;
  background: transparent;
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0.2;

  @media (hover: none){
    display:none;
  }
  /* backdrop-filter: invert(0.7); */

}

.trail:nth-child(12) {
  backdrop-filter: invert(0.7);
  opacity: 1;
}
`;

export default GlobalStyle;
