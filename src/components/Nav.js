import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <div className="nav-container">
        <h1>
          <Link id="logo" to="">
            Capture
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/">
              <span>01.</span> About
              <motion.div
                className={`line ${pathname === "/" ? "active" : ""}`}
              />
            </Link>
          </li>
          <li>
            <Link to="/work">
              <span>02.</span> Projects
              <motion.div
                className={`line ${pathname === "/work" ? "active" : ""}`}
              />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <span>03.</span> Contact
              <motion.div
                className={`line ${pathname === "/contact" ? "active" : ""}`}
              />
            </Link>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;

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
    z-index: 100;
  }

  .line {
    height: 3px;
    width: 0%;
    background: #23d997;
    margin-top: 5px;
    transition: all 0.5s ease-out;
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
  }

  ul {
    display: flex;
    list-style: none;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
