import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

function AboutUs() {
  return (
    <motion.div
      variants={pageAnimation(0.3, 0.2, 0.5)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ScrollTop />
    </motion.div>
  );
}

export default AboutUs;
