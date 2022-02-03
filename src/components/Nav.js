import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import logo from "../img/svg/logo.svg";
import { listAnim } from "../animation";

function Nav() {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <div className="nav-container">
        <Link id="logo" to="">
          <div className="logo-box">
            <img src={logo} alt="" className="logo" />
          </div>
        </Link>
        <motion.ul
          initial="hidden"
          animate="show"
          transition={{
            staggerChildren: 0.15,
            delay: 5,
            when: "beforeChildren",
          }}
          className="menu-list"
        >
          <motion.li variants={listAnim}>
            <Link to="/">
              <span>01.</span> About
              <motion.div
                className={`line ${pathname === "/" ? "active" : ""}`}
              />
            </Link>
          </motion.li>
          <motion.li variants={listAnim}>
            <Link to="/work">
              <span>02.</span> Projects
              <motion.div
                className={`line ${pathname === "/work" ? "active" : ""}`}
              />
            </Link>
          </motion.li>
          <motion.li variants={listAnim}>
            <Link to="/contact">
              <span>03.</span> Contact
              <motion.div
                className={`line ${pathname === "/contact" ? "active" : ""}`}
              />
            </Link>
          </motion.li>
        </motion.ul>
        <Hamburger />
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

  .logo-box {
    max-width: 4rem;

    img {
      width: 100%;
    }
  }

  .nav-container {
    min-height: 10vh;
    max-width: 120rem;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;

    /* background: #1b1b1b; */
    background: transparent;
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 200;
    /* backdrop-filter: blur(5px); */

    @media screen and (max-width: 37.5em) {
      padding: 1rem 3rem;
    }
  }

  .line {
    height: 3px;
    width: 0%;
    background: #23d997;
    margin-top: 5px;
    transition: all 0.5s ease-out;

    @media screen and (max-width: 93.75rem) {
      margin-top: 3px;
      height: 2px;
    }
  }

  .active {
    width: 100%;
  }

  span {
    font-family: "Inconsolata", monospace;
    font-size: 1.3rem;
  }

  #logo {
    font-size: 1.5rem;
    font-weight: lighter;
  }

  a {
    text-decoration: none;
    color: white;
    padding: 1rem 0;
    transition: all 0.3s;

    @media (hover: hover) {
      &:hover {
        color: #23d996;
      }
    }
  }

  .menu-list {
    display: flex;
    list-style: none;

    li {
      padding-left: 10rem;
      position: relative;
    }

    @media screen and (max-width: 62.5em) {
      display: none;
    }
  }
`;

export default Nav;
