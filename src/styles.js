import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12rem 10rem;
  color: white;

  @media screen and (max-width: 37.5em) {
    padding: 12rem 3rem;
  }

  .swipe {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translateX(-50%);

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;

    @media screen and (max-width: 93.75rem) {
      top: 75%;
      transform: translateX(-50%) scale(0.8);
    }

    @media screen and (max-width: 25rem) {
      transform: translateX(-50%) scale(0.6);
    }
  }
`;

export const Description = styled.div`
  max-width: 80rem;
  flex: 1;
  z-index: 2;

  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const Lens = styled.div`
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  border: 3px solid #23d997;
  background: transparent;
  backdrop-filter: drop-shadow(4px 4px 10px blue);
  transform: translate(-50%, -50%);
  display: none;
  pointer-events: none;
`;

export const SubHeading = styled(motion.p)`
  font-weight: 300;
`;

export const Serif = styled(motion.p)`
  font-family: "Inconsolata", monospace;
  padding: 1rem 0;
`;
