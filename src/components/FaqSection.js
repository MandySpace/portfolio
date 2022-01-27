import styled from "styled-components";
import { About } from "../styles.js";
import Toggle from "./Toggle.js";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

function FaqSection() {
  const [element, controls] = useScroll();

  return (
    <Faq variants={fade} ref={element} animate={controls} initial="hidden">
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              provident!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis deserunt eligendi et quam tempora.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              provident!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis deserunt eligendi et quam tempora.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Methods">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              provident!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis deserunt eligendi et quam tempora.
            </p>
          </div>
        </Toggle>
        <Toggle title="What Products do you offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              provident!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate officiis deserunt eligendi et quam tempora.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;

  span {
    display: block;
  }

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    padding: 3rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
