import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className="header">
        <div className="head-name">Shailesh Gontewar</div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/project">Project</NavLink>
            </li>
            <li>
              <NavLink to="#"> About</NavLink>
            </li>
            <li>
              <NavLink to="#"> Resume</NavLink>
            </li>
          </ul>
        </div>
        <div className="side-menu-btn" onClick={() => setShow(!show)}>
          {show ? <ImCross /> : <FaBars />}
        </div>
      </header>
      <div className={show ? "side-menu " : "hidemenu"} id="side-menu">
        <ul>
          <li>
            <NavLink to="/" className="border-bottom">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className="border-bottom">
              Project
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="border-bottom">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
