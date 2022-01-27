import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slide,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";
import { useHistory } from "react-router-dom";

function OurWork() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  const history = useHistory();

  const panHandler = (_, i) => {
    if (i.offset.x < -100) {
      history.push("/contact");
    }
    if (i.offset.x > 100) {
      history.push("/");
    }
  };

  return (
    <Work
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      dragTransition={{ bounceStiffness: 10, bounceDamping: 5 }}
      onPan={panHandler}
      variants={pageAnimation(0.1, 0.2, 0.2)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slide}></Frame1>
        <Frame2 variants={slide}></Frame2>
        <Frame3 variants={slide}></Frame3>
        <Frame4 variants={slide}></Frame4>
      </motion.div>

      <div className="container">
        <Movie>
          <div className="section-container">
            <motion.h2 variants={fade}>
              <span>01.</span> Score
            </motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <div className="info-container">
              <div className="img-container">
                <motion.img variants={photoAnim} src={athlete} alt="athlete" />
              </div>
              <motion.div variants={fade} className="about-project">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum pariatur odit laudantium exercitationem quae sint
                  impedit voluptate ratione laboriosam. Odit quam alias
                  voluptatibus reiciendis dolorem neque enim beatae fugit esse.
                </p>
                <div className="button-container">
                  <button>View Project</button>
                  <button>View Code</button>
                </div>
              </motion.div>
            </div>
          </div>
        </Movie>

        <Movie
          variants={fade}
          ref={element}
          animate={controls}
          initial="hidden"
        >
          <div className="section-container">
            <h2>The Racer</h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <motion.div variants={fade} className="info-container">
              <div className="img-container">
                <motion.img variants={photoAnim} src={athlete} alt="athlete" />
              </div>
              <div className="about-project">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum pariatur odit laudantium exercitationem quae sint
                  impedit voluptate ratione laboriosam. Odit quam alias
                  voluptatibus reiciendis dolorem neque enim beatae fugit esse.
                </p>
                <div className="button-container">
                  <button>View Project</button>
                  <button>View Source Code</button>
                </div>
              </div>
            </motion.div>
          </div>
        </Movie>

        <Movie
          variants={fade}
          ref={element2}
          animate={controls2}
          initial="hidden"
        >
          <div className="section-container">
            <h2>Good Times</h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <motion.div variants={fade} className="info-container">
              <div className="img-container">
                <motion.img variants={photoAnim} src={athlete} alt="athlete" />
              </div>
              <div className="about-project">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum pariatur odit laudantium exercitationem quae sint
                  impedit voluptate ratione laboriosam. Odit quam alias
                  voluptatibus reiciendis dolorem neque enim beatae fugit esse.
                </p>
                <div className="button-container">
                  <button>View Project</button>
                  <button>View Source Code</button>
                </div>
              </div>
            </motion.div>
          </div>
        </Movie>
      </div>
      <ScrollTop />
    </Work>
  );
}

const Work = styled(motion.div)`
  overflow: hidden;
  background: transparent;
  width: 100vw;
  height: 100vh;

  h2 {
    font-weight: 700;
  }

  .container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    width: 100%;
    height: 100%;
  }
`;

const Movie = styled(motion.section)`
  scroll-snap-align: start;
  padding: 10rem;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  .section-container {
    max-width: 100rem;
    margin: 0 auto;
  }

  .info-container {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  .img-container {
    flex: 2;
    /* height: 50vh; */
    overflow: hidden;
  }

  .about-project {
    flex: 1;
  }

  .button-container {
    display: flex;
    gap: 3rem;
  }

  img {
    width: 100%;
    /* height: 70vh; */
    object-fit: cover;
    object-position: center;

    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100vh;
  /* background: #fffebf; */
  background: #00c5a6;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  /* background: #ff8efb; */
  background: #00afb1;
`;

const Frame3 = styled(Frame1)`
  /* background: #8ed2ff; */
  background: #0099b5;
`;

const Frame4 = styled(Frame1)`
  /* background: #8effa0; */
  background: #0081b2;
`;

export default OurWork;
