import { About, Description, Hide, SubHeading, Serif } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, swipeAnim } from "../animation";
import { useHistory } from "react-router-dom";
import VerticalText from "../components/VerticalText";
import swipe from "../img/svg/swipe.svg";

function AboutSection() {
  const history = useHistory();

  const panHandler = (_, i) => {
    if (i.offset.x < -100) {
      history.push("/work");
    }
    if (i.offset.x > 100) {
      history.push("/contact");
    }
  };

  return (
    <About
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      dragTransition={{ bounceStiffness: 10, bounceDamping: 5 }}
      onPan={panHandler}
    >
      <Description>
        <motion.div>
          <Hide>
            <Hide>
              <Serif variants={titleAnim}>Hi!, My name is </Serif>
            </Hide>
            <motion.h2 variants={titleAnim}>
              <span>Amandeep Singh</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              I'm a <span>Frontend</span> Developer.
            </motion.h2>
          </Hide>
        </motion.div>
        <SubHeading variants={fade}>
          I use <span>JavaScript</span> and <span>React</span> to create
          high-end interactive experiences and products. I'm a firm believer in
          prioritising user experience, accessibility and responsive design.
        </SubHeading>

        <motion.button variants={fade} onClick={() => history.push("/work")}>
          Check out my projects
        </motion.button>
      </Description>
      <VerticalText />
      <div className="swipe">
        <motion.img
          variants={swipeAnim}
          src={swipe}
          alt="finger swiping left"
        />
      </div>
    </About>
  );
}

export default AboutSection;
