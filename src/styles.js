import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
  color: white;
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
