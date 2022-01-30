import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import {
  line1Anim,
  line2Anim,
  line3Anim,
  line1AnimBack,
  line2AnimBack,
  line3AnimBack,
  bg1Anim,
  bg2Anim,
  bg1AnimBack,
  bg2AnimBack,
  listMenuAnim,
} from "../animation";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const menuClickHandler = (e) => {
    setIsMenuOpen(false);
  };

  return (
    <HamMenu>
      <div
        className="ham-menu ham-menu-active"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <motion.div
          variants={isMenuOpen ? line1Anim : line1AnimBack}
          initial="hidden"
          animate="show"
          className="ham-line line-1"
        ></motion.div>
        <motion.div
          variants={isMenuOpen ? line2Anim : line2AnimBack}
          initial="hidden"
          animate="show"
          className="ham-line line-2"
        ></motion.div>
        <motion.div
          variants={isMenuOpen ? line3Anim : line3AnimBack}
          initial="hidden"
          animate="show"
          className="ham-line line-3"
        ></motion.div>
      </div>

      <motion.div
        variants={isMenuOpen ? bg1Anim : bg1AnimBack}
        initial="hidden"
        animate="show"
        className="menu-bg-1"
      ></motion.div>
      <motion.div
        variants={isMenuOpen ? bg2Anim : bg2AnimBack}
        initial="hidden"
        animate="show"
        className="menu-bg-2"
      ></motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.ul
            variants={listMenuAnim}
            initial="hidden"
            animate="show"
            exit="exit"
            className="menu-mobile-list"
            onClick={menuClickHandler}
          >
            <li onClick={menuClickHandler}>
              <Link to="/">
                <span>01.</span> About
                <motion.div
                  className={`line ${pathname === "/" ? "active" : ""}`}
                />
              </Link>
            </li>
            <li onClick={menuClickHandler}>
              <Link to="/work">
                <span>02.</span> Projects
                <motion.div
                  className={`line ${pathname === "/work" ? "active" : ""}`}
                />
              </Link>
            </li>
            <li onClick={menuClickHandler}>
              <Link to="/contact">
                <span>03.</span> Contact
                <motion.div
                  className={`line ${pathname === "/contact" ? "active" : ""}`}
                />
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </HamMenu>
  );
}

export default Hamburger;

const HamMenu = styled(motion.div)`
  @media screen and (min-width: 62.5rem) {
    display: none;
  }

  .ham-menu {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 1rem;
    padding-right: 0;
    position: relative;
    z-index: 100;
  }

  .ham-line {
    width: 25px;
    height: 1px;
    background: #ccc;
  }

  .menu-bg-1,
  .menu-bg-2 {
    position: fixed;
    top: 0;
    background: #23d9965a;
    width: 50%;
    min-height: 100vh;
    backdrop-filter: blur(2px) brightness(10%);
  }

  .menu-bg-1 {
    left: 0;
  }

  .menu-bg-2 {
    right: 0;
  }

  .menu-mobile {
  }

  .menu-mobile-list {
    position: fixed;
    inset: 0;
    min-height: 100vh;
    list-style: none;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10rem;

    li {
      a {
        font-size: 3rem;
        font-weight: 700;
      }

      span {
        font-size: 3rem;
      }
    }
  }
`;
