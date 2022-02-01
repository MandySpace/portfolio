import styled from "styled-components";
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
import { useEffect, useRef, useState } from "react";
import left from "../img/svg/arr-left.svg";
import right from "../img/svg/arr-right.svg";

import score1 from "../img/score/score1.png";
import score1_low from "../img/score/score1-low.png";
// import score1_mobile from "../img/score/score1-mobile.png";
import score2 from "../img/score/score2.jpg";
import score2_low from "../img/score/score2-low.jpg";
import score3 from "../img/score/score3.png";
import score3_low from "../img/score/score3-low.png";
// import score3_mobile from "../img/score/score3-mobile.png";

import muse1 from "../img/muse/muse1.png";
import muse1_low from "../img/muse/muse1-low.png";
// import muse1_mobile from "../img/muse/muse1-mobile.png";
import muse2 from "../img/muse/muse2.jpg";
import muse2_low from "../img/muse/muse2-low.jpg";
import muse3 from "../img/muse/muse3.png";
import muse3_low from "../img/muse/muse3-low.png";
// import muse3_mobile from "../img/muse/muse3-mobile.png";

import astra1 from "../img/astra/astra1.png";
import astra1_low from "../img/astra/astra1-low.png";
// import astra1_mobile from "../img/astra/astra1-mobile.png";
import astra2 from "../img/astra/astra2.jpg";
import astra2_low from "../img/astra/astra2-low.jpg";
import astra3 from "../img/astra/astra3.png";
import astra3_low from "../img/astra/astra3-low.png";
// import astra3_mobile from "../img/astra/astra3-mobile.png";

function imgPromise(ref, newSrc) {
  return new Promise((resolve) => {
    ref.current.src = newSrc;
    ref.current.addEventListener("load", () => resolve());
  });
}

function OurWork() {
  const [element, controls, view] = useScroll();
  const [element2, controls2, view2] = useScroll();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const muse1Ref = useRef(null);
  const muse2Ref = useRef(null);
  const muse3Ref = useRef(null);

  const score1Ref = useRef(null);
  const score2Ref = useRef(null);
  const score3Ref = useRef(null);

  const astra1Ref = useRef(null);
  const astra2Ref = useRef(null);
  const astra3Ref = useRef(null);

  const [slide1, setSlide1] = useSlider(ref1);
  const [slide2, setSlide2] = useSlider(ref2);
  const [slide3, setSlide3] = useSlider(ref3);

  const [didImageLoad, setdidImageLoad] = useState(false);
  const [didImageLoad2, setdidImageLoad2] = useState(false);
  const [didImageLoad3, setdidImageLoad3] = useState(false);

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

  useEffect(() => {
    Promise.allSettled([
      imgPromise(muse1Ref, muse1),
      imgPromise(muse2Ref, muse2),
      imgPromise(muse3Ref, muse3),
    ]).then(() => setdidImageLoad(true));
  }, []);

  useEffect(() => {
    if (!didImageLoad2 && view) {
      Promise.allSettled([
        imgPromise(score1Ref, score1),
        imgPromise(score2Ref, score2),
        imgPromise(score3Ref, score3),
      ]).then(() => setdidImageLoad2(true));
    }
  }, [view, didImageLoad2]);

  useEffect(() => {
    if (!didImageLoad3 && view2) {
      Promise.allSettled([
        imgPromise(astra1Ref, astra1),
        imgPromise(astra2Ref, astra2),
        imgPromise(astra3Ref, astra3),
      ]).then(() => setdidImageLoad3(true));
    }
  }, [view2, didImageLoad3]);

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
                  {!didImageLoad && <div className="blur" />}
                  <div className="img-container" ref={ref1}>
                    <motion.img
                      variants={photoAnim}
                      src={muse1_low}
                      alt="Landing page of muse showing a welcome message to the user and displaying all his playlists in a grid"
                      ref={muse1Ref}
                    />
                    <motion.img
                      variants={photoAnim}
                      src={muse2_low}
                      alt="displaying the responsive design of the web app on a ipad and iphone placed on the table"
                      ref={muse2Ref}
                    />
                    <motion.img
                      variants={photoAnim}
                      src={muse3_low}
                      alt="showing how the menus on the app look like"
                      ref={muse3Ref}
                    />
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
                  app uses OAuth2 standard (Implicit Grant flow) to request and
                  get an access token from Spotify API.
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
            <h2>
              <span>02.</span> Score
            </h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <motion.div variants={fade} className="info-container">
              <div className="carousel">
                <div className="slider">
                  {!didImageLoad2 && <div className="blur" />}
                  <div className="img-container" ref={ref2}>
                    <motion.img
                      variants={photoAnim}
                      src={score1_low}
                      alt="Showing the landing page of score which has poster of cyberpunk 2077"
                      ref={score1Ref}
                    />
                    <motion.img
                      variants={photoAnim}
                      src={score2_low}
                      alt="displaying the responsive design of the web app on a ipad and iphone placed on the table"
                      ref={score2Ref}
                    />
                    <motion.img
                      variants={photoAnim}
                      src={score3_low}
                      alt="showing the game details page of the web app which is currently displaying god of war"
                      ref={score3Ref}
                    />
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
                  Score allows you to search and view all the upcoming, latest
                  and popular games. You can filter out results based on
                  different platforms, genres and metacritic score. Don't know
                  what to play? This web app will make sure you find your exact
                  match.
                </p>
                <div className="button-container">
                  <button className="work-btn">View Project</button>
                  <button className="work-btn">View Code</button>
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
            <h2>
              <span>03.</span> Astra
            </h2>
            <motion.div variants={lineAnim} className="line"></motion.div>
            <motion.div variants={fade} className="info-container">
              <div className="carousel">
                <div className="slider">
                  {!didImageLoad3 && <div className="blur" />}
                  <div className="img-container" ref={ref3}>
                    <motion.img
                      variants={photoAnim}
                      src={astra1_low}
                      alt="the planets page of astra website is currently information of earth"
                      ref={astra1Ref}
                    />
                    <motion.img
                      variants={photoAnim}
                      src={astra2_low}
                      alt="displaying the responsive design of the web app on a ipad and iphone placed on the table"
                      ref={astra2Ref}
                    />
                    <motion.img
                      variants={photoAnim}
                      src={astra3_low}
                      alt="this section of the website shows the various known bodies that exist in our solar system"
                      ref={astra3Ref}
                    />
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
                  Take a virtual tour of the solar system with astra. Explore
                  the planets like you've never before and satisfy your inner
                  curiosity. The exploration of space by humans is an incredible
                  feat and you can know more about it on Astra!
                </p>
                <div className="button-container">
                  <button className="work-btn">View Project</button>
                  <button className="work-btn">View Code</button>
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
  padding: 12rem;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 37.5em) {
    padding: 12rem 3rem;
  }

  .section-container {
    max-width: 100rem;
    margin: auto;
  }

  .info-container {
    display: flex;
    gap: 3rem;
    align-items: center;

    @media screen and (max-width: 62.5em) {
      flex-direction: column;
      gap: 0rem;
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
    position: relative;

    .blur {
      position: absolute;
      inset: 0;
      backdrop-filter: blur(50px);
      z-index: 10;
    }
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
  background: #fffebf;
  /* background: #00c5a6; */
  z-index: 100;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
  /* background: #00afb1; */
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
  /* background: #0099b5; */
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
  /* background: #0081b2; */
`;

export default OurWork;
