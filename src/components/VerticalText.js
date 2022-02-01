import mail from "../img/svg/mail.svg";
import github from "../img/svg/github.svg";
import linkedin from "../img/svg/linkedin.svg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { verticalAnim } from "../animation";

function VerticalText() {
  return (
    <Vertical variants={verticalAnim} className="vertical">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/amandeep-singh-368b14227/"
      >
        <img src={linkedin} alt="" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/MandySpace">
        <img src={github} alt="" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="mailto:amandeepsingh.dev99@gmail.com"
      >
        <img src={mail} alt="" />
      </a>
    </Vertical>
  );
}

export default VerticalText;

const Vertical = styled(motion.div)`
  position: absolute;
  bottom: -4%;
  right: -3%;
  max-width: 100rem;
  margin: 0 auto;
  transform: rotate(-90deg) translateX(150%);

  @media screen and (max-width: 93.75em) {
    right: -5%;
    bottom: -12%;
  }

  @media screen and (max-width: 75em) {
    bottom: -20%;
  }

  @media screen and (max-width: 60em) {
    margin-right: 10rem;
    bottom: -8%;
  }

  /* @media screen and (max-width: 50em) {
    bottom: -8%;
  } */

  @media screen and (max-width: 37.5em) {
    margin-right: 5rem;
    right: -10%;
    bottom: -10%;
  }

  @media screen and (max-width: 28.125em) {
  }

  @media screen and (max-width: 23.4375em) {
    bottom: -15%;
  }

  @media screen and (max-width: 20em) {
    display: none;
  }

  img {
    transform: rotate(90deg);
    display: inline-block;
    margin-left: 0.7rem;
    transition: all 0.2s;

    @media (hover: hover) {
      &:hover {
        transform: rotate(90deg) translateY(-10%);
      }
    }

    @media screen and (max-width: 93.75em) {
      transform: rotate(90deg) scale(0.8);
      margin-left: 0.2rem;

      @media (hover: hover) {
        &:hover {
          transform: rotate(90deg) translateY(-10%) scale(0.8);
        }
      }
    }

    @media screen and (max-width: 75em) {
      transform: rotate(90deg) scale(0.6);
      margin-left: 0rem;

      media (hover: hover) {
        &:hover {
          transform: rotate(90deg) translateY(-10%) scale(0.6);
        }
      }
    }
  }

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    background: #23d997;
    position: absolute;
    top: 44%;
    left: -105%;
    /* transform: translateY(-3100%); */
  }
`;
