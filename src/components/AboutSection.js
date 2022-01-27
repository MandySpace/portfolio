import { About, Description, Hide, SubHeading, Serif } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";
import { useHistory } from "react-router-dom";

function AboutSection() {
  const history = useHistory();

  const panHandler = (_, i) => {
    console.log(i.offset.x);
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
          I use <span>JavaScript</span> and React to create high-end interactive
          experiences and products. I'm a firm believer in prioritising user
          experience, accessibility and responsive design.
        </SubHeading>
        <motion.button variants={fade}>Check out my projects</motion.button>
      </Description>
      {/* <Wave /> */}
    </About>
  );
}

export default AboutSection;
