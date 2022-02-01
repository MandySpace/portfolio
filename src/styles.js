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
  will-change: transform;

  @media screen and (max-width: 37.5em) {
    padding: 12rem 3rem;
  }

  .swipe {
    position: absolute;
    left: 50%;
    top: 80%;
    will-change: transform;
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
    will-change: transform;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const SubHeading = styled(motion.p)`
  font-weight: 300;
  will-change: transform;
`;

export const Serif = styled(motion.p)`
  font-family: "Inconsolata", monospace;
  padding: 1rem 0;
  will-change: transform;
`;
