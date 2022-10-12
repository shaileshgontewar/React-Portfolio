import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="header">
        <div className="head-name">Shailesh Gontewar</div>
        <div className="menu">
          <a href=".">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="side-menu-btn" onClick={() => setShow(!show)}>
          {show ? <ImCross /> : <FaBars />}
        </div>
      </header>
      <div className={show ? "side-menu " : "hidemenu"} id="side-menu">
        <a href="." className="border-bottom">
          Home
        </a>
        <a href="#about" className="border-bottom">
          About
        </a>
        <a href="#portfolio" className="border-bottom">
          Portfolio
        </a>
        <a href="#resume" className="border-bottom">
          Resume
        </a>
        <a href="#contact" className="border-bottom">
          Contact
        </a>
      </div>
    </>
  );
};

export default Header;
