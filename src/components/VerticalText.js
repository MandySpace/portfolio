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

  img {
    transform: rotate(90deg);
    display: inline-block;
    margin-left: 0.7rem;
    transition: all 0.2s;

    &:hover {
      transform: rotate(90deg) translateY(-10%);
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
