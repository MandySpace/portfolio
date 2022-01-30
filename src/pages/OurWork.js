import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import a from "../img/a.png";
import muse from "../img/muse.png";
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
import useSlider from "../components/useSlider";
import { useRef } from "react";
import left from "../img/svg/arr-left.svg";
import right from "../img/svg/arr-right.svg";

function OurWork() {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const [slide1, setSlide1] = useSlider(ref1);
  const [slide2, setSlide2] = useSlider(ref2);
  const [slide3, setSlide3] = useSlider(ref3);

  const history = useHistory();

  const panHandler = (_, i) => {
    if (i.offset.x < -100) {
      history.push("/contact");
    }
    if (i.offset.x > 100) {
      history.push("/");
    }
  };

  const dotHandler = (setSlide) => {
    return (e) => {
      if (e.target.classList.contains("dot")) setSlide(+e.target.dataset.slide);
    };
  };

  const arrowHandler = (setSlide, slide, direction) => {
    return () => {
      if (slide + direction > 2) setSlide(0);
      else if (slide + direction < 0) setSlide(2);
      else setSlide(slide + direction);
    };
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
              <span>01.</span> Muse
            </motion.h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <div className="info-container">
              <div className="carousel">
                <div className="slider">
                  <div className="img-container" ref={ref1}>
                    <motion.img variants={photoAnim} src={muse} alt="athlete" />
                    <motion.img
                      variants={photoAnim}
                      src={athlete}
                      alt="athlete"
                    />
                    <motion.img variants={photoAnim} src={a} alt="athlete" />
                  </div>
                </div>
                <motion.div variants={fade} className="img-navigation">
                  <div
                    className="left-arr"
                    onClick={arrowHandler(setSlide1, slide1, -1)}
                  >
                    <img src={left} alt="arrow-left" />
                  </div>
                  <div
                    className="dots-container"
                    onClick={dotHandler(setSlide1)}
                  >
                    <div
                      className={`dot ${slide1 === 0 ? "dot-active" : ""}`}
                      data-slide={0}
                    ></div>
                    <div
                      className={`dot ${slide1 === 1 ? "dot-active" : ""}`}
                      data-slide={1}
                    ></div>
                    <div
                      className={`dot ${slide1 === 2 ? "dot-active" : ""}`}
                      data-slide={2}
                    ></div>
                  </div>
                  <div
                    className="right-arr"
                    onClick={arrowHandler(setSlide1, slide1, 1)}
                  >
                    <img src={right} alt="arrow-right" />
                  </div>
                </motion.div>
              </div>
              <motion.div variants={fade} className="about-project">
                <p>
                  A web app for streaming Spotify music, visualizing and
                  managing your playlists. You can search for your favourite
                  tunes or access your favourite music from your playlists. This
                  app uses Implicit Grant flow to request and get an access
                  token.
                </p>
                <div className="button-container">
                  <button className="work-btn">View Project</button>
                  <button className="work-btn">View Code</button>
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
              <div className="carousel">
                <div className="slider">
                  <div className="img-container" ref={ref2}>
                    <motion.img variants={photoAnim} src={muse} alt="athlete" />
                    <motion.img
                      variants={photoAnim}
                      src={athlete}
                      alt="athlete"
                    />
                    <motion.img variants={photoAnim} src={a} alt="athlete" />
                  </div>
                </div>
                <div className="img-navigation">
                  <div
                    className="left-arr"
                    onClick={arrowHandler(setSlide2, slide2, -1)}
                  >
                    <img src={left} alt="arrow-left" />
                  </div>
                  <div
                    className="dots-container"
                    onClick={dotHandler(setSlide2)}
                  >
                    <div
                      className={`dot ${slide2 === 0 ? "dot-active" : ""}`}
                      data-slide={0}
                    ></div>
                    <div
                      className={`dot ${slide2 === 1 ? "dot-active" : ""}`}
                      data-slide={1}
                    ></div>
                    <div
                      className={`dot ${slide2 === 2 ? "dot-active" : ""}`}
                      data-slide={2}
                    ></div>
                  </div>
                  <div
                    className="right-arr"
                    onClick={arrowHandler(setSlide2, slide2, 1)}
                  >
                    <img src={right} alt="arrow-right" />
                  </div>
                </div>
              </div>
              <div className="about-project">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum pariatur odit laudantium exercitationem quae sint
                  impedit voluptate ratione laboriosam. Odit quam alias
                  voluptatibus reiciendis dolorem neque enim beatae fugit esse.
                </p>
                <div className="button-container">
                  <button className="work-btn">View Project</button>
                  <button className="work-btn">View Source Code</button>
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
              <div className="carousel">
                <div className="slider">
                  <div className="img-container" ref={ref3}>
                    <motion.img variants={photoAnim} src={muse} alt="athlete" />
                    <motion.img
                      variants={photoAnim}
                      src={athlete}
                      alt="athlete"
                    />
                    <motion.img variants={photoAnim} src={a} alt="athlete" />
                  </div>
                </div>
                <div className="img-navigation">
                  <div
                    className="left-arr"
                    onClick={arrowHandler(setSlide3, slide3, -1)}
                  >
                    <img src={left} alt="arrow-left" />
                  </div>
                  <div
                    className="dots-container"
                    onClick={dotHandler(setSlide3)}
                  >
                    <div
                      className={`dot ${slide3 === 0 ? "dot-active" : ""}`}
                      data-slide={0}
                    ></div>
                    <div
                      className={`dot ${slide3 === 1 ? "dot-active" : ""}`}
                      data-slide={1}
                    ></div>
                    <div
                      className={`dot ${slide3 === 2 ? "dot-active" : ""}`}
                      data-slide={2}
                    ></div>
                  </div>
                  <div
                    className="right-arr"
                    onClick={arrowHandler(setSlide3, slide3, 1)}
                  >
                    <img src={right} alt="arrow-right" />
                  </div>
                </div>
              </div>
              <div className="about-project">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nostrum pariatur odit laudantium exercitationem quae sint
                  impedit voluptate ratione laboriosam. Odit quam alias
                  voluptatibus reiciendis dolorem neque enim beatae fugit esse.
                </p>
                <div className="button-container">
                  <button className="work-btn">View Project</button>
                  <button className="work-btn">View Source Code</button>
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

  @media screen and (max-width: 37.5em) {
    padding: 10rem 5rem;
  }

  .section-container {
    max-width: 100rem;
    margin: 0 auto;
  }

  .info-container {
    display: flex;
    gap: 3rem;
    align-items: center;

    @media screen and (max-width: 62.5em) {
      flex-direction: column;
    }
  }

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }

  .slider {
    overflow: hidden;
    aspect-ratio: 16/9;
    width: 100%;
  }

  .carousel {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-container {
    display: flex;
    will-change: transform;
    width: 100%;
    transition: all 1s ease-in-out;
  }

  .img-navigation {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    width: 70%;

    @media screen and (max-width: 62.5em) {
      width: 80%;
    }
  }

  .left-arr,
  .right-arr {
    padding: 0.3rem;
    border-radius: 50%;
    transition: all 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #75757573;

    &:active {
      background: #5a5a5a73;
    }

    @media (hover: hover) {
      &:hover {
        background: #9c9c9c70;
      }
    }

    @media screen and (max-width: 37.5em) {
      padding: 0.2rem;
      transform: scale(0.8);
    }
  }

  .dots-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .dot {
    width: 0.7rem;
    aspect-ratio: 1;
    background: #535353;
    border-radius: 50%;
    box-sizing: content-box;
    border: 0.5rem solid #1d1d1d;
  }

  .dot-active {
    background: #23d997;
  }

  .about-project {
    flex: 1;

    p {
      width: 100%;
      max-width: 70ch;
    }
  }

  .button-container {
    display: flex;
    gap: 3rem;

    @media screen and (max-width: 62.5em) {
      justify-content: center;
    }

    .work-btn {
      width: 12rem;
    }
  }

  img {
    width: 100%;
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
