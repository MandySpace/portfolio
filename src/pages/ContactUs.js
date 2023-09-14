import { motion } from "framer-motion";
import { fade, pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import mail from "../img/svg/mail.svg";
import github from "../img/svg/github.svg";
import copy_white from "../img/svg/copy_white.svg";
import linkedin from "../img/svg/linkedin.svg";
import { useRef } from "react";
import useCursor from "../components/useCursor";

function ContactUs({ name, email, message, setName, setEmail, setMessage }) {
  const history = useHistory();

  const copyToClipRef = useRef(null);

  const formNotifRef = useRef(null);

  useCursor();

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    copyToClipRef.current.textContent = "Copied!";
  }

  function onMouseLeave() {
    setTimeout(
      () => (copyToClipRef.current.textContent = "Click to copy!"),
      350
    );
  }

  const panHandler = (_, i) => {
    if (i.offset.x < -100) {
      history.push("/");
    }
    if (i.offset.x > 100) {
      history.push("/work");
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://portfolio-contact-neon.vercel.app/api/contact",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        formNotifRef.current.textContent = "Message sent!";
        formNotifRef.current.style.background = "#23d99678";
        formNotifRef.current.classList.add("show");
        setTimeout(() => formNotifRef.current.classList.remove("show"), 3000);
      } else {
        throw new Error();
      }
    } catch (err) {
      formNotifRef.current.textContent = "Failed to send!";
      formNotifRef.current.style.background = "red";
      formNotifRef.current.classList.add("show");
      setTimeout(() => formNotifRef.current.classList.remove("show"), 3000);
    }
  };

  return (
    <ContactStyle
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.8}
      dragTransition={{ bounceStiffness: 10, bounceDamping: 5 }}
      onPan={panHandler}
      variants={pageAnimation(0.3, 0.2, 0.25)}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="main-contact-container">
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Contact</span> Me
            </motion.h2>
          </Hide>
        </Title>

        <div className="forms-container">
          <form autoComplete="off" onSubmit={onSubmitHandler}>
            <motion.div variants={fade} className="name flex-col input-cont">
              <input
                type="text"
                id="name"
                required
                className="input-name"
                autoFocus="autofocus"
                maxLength={30}
                placeholder=" "
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className="label">
                <span className="content">Name</span>
              </label>
            </motion.div>

            <motion.div variants={fade} className="email flex-col input-cont">
              <input
                type="email"
                id="email"
                required
                className="input-email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="label">
                <span className="content">Email</span>
              </label>
            </motion.div>

            <motion.div variants={fade} className="flex-col input-cont message">
              <textarea
                type="text"
                id="message"
                required
                className="input-message"
                placeholder=" "
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label htmlFor="message" className="label label-message">
                <span className="content content-message">Message</span>
              </label>
            </motion.div>

            <motion.div variants={fade} className="btn-container">
              <span ref={formNotifRef} className="submit-status">
                Form submitted successfully
              </span>
              <a href="dsb">
                <button className="form-btn">Submit</button>
              </a>
            </motion.div>
          </form>
          <div className="contact-info">
            <motion.div variants={fade} className="link-container">
              <img src={mail} alt="envelope" className="svg" />
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:amandeepsingh.dev99@gmail.com"
              >
                amandeepsingh.dev99@gmail.com
              </a>
              <div
                className="copy"
                onClick={() => copyToClipboard("amandeepsingh.dev99@gmail.com")}
                onMouseLeave={onMouseLeave}
              >
                <img src={copy_white} alt="copy to clipboard" />
                <span ref={copyToClipRef} className="copy-text">
                  Click to copy
                </span>
              </div>
            </motion.div>

            <motion.div variants={fade} className="link-container">
              <img src={github} alt="" className="svg" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MandySpace"
              >
                github.com/MandySpace
              </a>
            </motion.div>

            <motion.div variants={fade} className="link-container">
              <img src={linkedin} alt="" className="svg" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/amandeep-singh-368b14227/"
              >
                linkedin.com/in/amandeep-singh-368b14227/
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
}
const ContactStyle = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 12rem 10rem;

  @media screen and (max-width: 37.5em) {
    padding: 12rem 3rem;
  }

  .main-contact-container {
    max-width: 120rem;
    margin: 0 auto;

    h2 span {
      color: #23d997;
      font-weight: 700;
    }

    h2 {
      color: #fff;
      font-weight: 700;
      font-size: 4rem;
      /* text-align: center; */
    }

    .forms-container {
      display: flex;
      gap: 20rem;
      /* overflow-y: scroll; */

      @media screen and (max-width: 50em) {
        gap: 10rem;
      }

      @media screen and (max-width: 43.75em) {
        flex-direction: column;
        gap: 7rem;
      }
    }

    .contact-info:first-child {
      margin-top: 3rem;
    }

    .link-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 5.8rem;
      margin-top: 2rem;

      @media screen and (max-width: 43.75em) {
        margin-bottom: 2rem;
        margin-top: 0rem;
      }

      @media screen and (min-width: 93.75em) {
        margin-top: 3rem;
      }

      a {
        text-decoration: none;
        color: #fff;
        font-family: "Inconsolata", monospace;
        font-size: 1.3rem;

        &:hover {
          color: #23d997;
        }
      }

      .svg {
        @media screen and (max-width: 75em) {
          transform: scale(0.8);
        }
      }

      .copy {
        position: relative;

        img {
          background: transparent;
          border-radius: 50px;
          box-sizing: content-box;
          padding: 0.4rem;
          transition: all 0.3s ease;

          &:hover {
            transform-origin: center;
            transform: scale(1.07);
          }

          @media screen and (max-width: 75em) {
            transform: scale(0.8);

            &:hover {
              transform-origin: center;
              transform: scale(0.87);
            }
          }
        }

        .copy-text {
          opacity: 0;
          position: absolute;
          left: 50%;
          top: -50%;
          width: max-content;
          transform: translateX(-50%);
          color: #fff;
          font-family: "Inconsolata", monospace;
          color: #23d997;
          transition: all 0.3s ease;

          @media screen and (max-width: 75em) {
            top: -30%;
          }
        }

        &:hover .copy-text {
          opacity: 1;
        }
      }
    }

    .input-cont {
      position: relative;
      width: 25rem;
      height: 5rem;
      margin-bottom: 3rem;
      overflow: hidden;

      @media screen and (max-width: 43.75em) {
        width: 100%;
      }
    }

    .email {
      margin-bottom: 0.5rem;
    }

    .message {
      height: 7.5rem;
    }

    .input-name,
    .input-email,
    .input-message {
      width: 100%;
      height: 100%;
      padding-top: 3rem;

      font-size: 1.3rem;
      color: #fff;
      border: none;
      background: transparent;

      &:focus {
        outline: none;
      }

      &:focus + .label .content,
      &:not(:placeholder-shown) + .label .content {
        transform: translateY(-150%);
        color: #23d997;
        font-size: 1rem;
      }

      &:focus + .label .content-message,
      &:not(:placeholder-shown) + .label .content-message {
        transform: translateY(-500%);
        color: #23d997;
      }

      &:not(:placeholder-shown) + .label::after,
      &:focus + .label::after {
        transform: translateX(0);
      }
    }

    .input-message {
      height: 100px;
      resize: none;
      margin-top: 2rem;
      font-family: inherit;
      padding-top: 3.6875rem;
    }

    .label {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #ccc;

      pointer-events: none;
    }

    .label::after {
      content: "";
      position: absolute;
      /* margin-top: 2px; */
      width: 100%;
      height: 100%;
      left: 0;
      z-index: 100;
      margin-top: 1px;
      border-bottom: 3px solid #23d997;
      transform: translateX(-100%);
      transition: all 0.3s ease;
    }

    .content {
      position: absolute;
      font-family: "Inconsolata", monospace;
      color: #ccc;
      bottom: 5px;
      font-size: 1.3rem;
      left: 0;
      transition: all 0.3s ease;
    }

    .flex-col {
      display: flex;
      flex-direction: column;
    }

    .form-btn {
      padding: 0.5em 2em;
    }

    .btn-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .submit-status {
      display: inline-block;
      font-size: 0.8rem;
      font-family: "Inconsolata", monospace;
      background: #23d99678;
      color: #fff;
      padding: 0.5rem 2rem;
      border-radius: 50px;
      opacity: 0;
      transition: all 0.3s ease;
    }

    .show {
      opacity: 1;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default ContactUs;
