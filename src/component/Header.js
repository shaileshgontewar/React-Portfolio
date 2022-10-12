const Header = () => {
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
      </header>

      {/* <span
        style="font-size: 30px; cursor: pointer"
        id="side-menu-btn"
        className="side-menu-btn"
        onclick="openMenu()"
      >
        &#9776;
      </span> */}

      {/* <div className="side-menu" id="side-menu">
        <a
          href="javascript:void(0)"
          className="close-btn"
          onclick="closeMenu()"
        >
          &times;
        </a>
        <a href="." className="border-bottom">
          Home
        </a>
        <a href="#about" className="border-bottom" onclick="closeMenu()">
          About
        </a>
        <a href="#portfolio" className="border-bottom" onclick="closeMenu()">
          Portfolio
        </a>
        <a href="#resume" className="border-bottom" onclick="closeMenu()">
          Resume
        </a>
        <a href="#contact" className="border-bottom" onclick="closeMenu()">
          Contact
        </a>
      </div> */}
    </>
  );
};

export default Header;
