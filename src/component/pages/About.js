import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="about-box" id="about">
        <div className="about box">
          <button>
            <NavLink to="/project">
              Have a look at my <span>Projects</span>
            </NavLink>
          </button>
        </div>
        <div className="about-text box">
          <p className="about-me">Technologies</p>
          <p>
            I'm a front-end developer with good experience in making front-end
            projects. I'm interested in all kinds of visual communication, but
            my major focus is on designing web, mobile & tablet interfaces. I
            also have skills in other fields like Network and Hardware
            troubleshotting or web development.
          </p>
          <br />
          <div className="skills-box">
            <p className="skills-heading">Languages / Library / Technology</p>
            <ul className="logo-list">
              <li>
                <img src="./image/html5.png" alt="" />
              </li>
              <li>
                <img src="./image/css3.svg" alt="" />
              </li>
              <li>
                <img src="./image/js.svg" alt="" />
              </li>
              <li>
                <img src="./image/reactjs.svg" alt="" />
              </li>
              <li>
                <img src="./image/github.png" alt="" />
              </li>
              <li>
                <img src="./image/netlify.svg" alt="" />
              </li>
              <li>
                <img src="./image/nodejs.png" alt="" />
              </li>
              <li>
                <img src="./image/mongodb.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
