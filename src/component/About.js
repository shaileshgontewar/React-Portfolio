const About = () => {
  return (
    <>
      <div className="about-box">
        <div className="about-img box">
          {/* <img src="./image/about-me-guy.png" alt="" /> */}
        </div>
        <div className="about-text box">
          <p className="about-me" id="about">
            About Me
          </p>
          <p>
            I'm a web designer & front-end developer with good experience in
            making front-end projects. I'm interested in all kinds of visual
            communication, but my major focus is on designing web, mobile &
            tablet interfaces. I also have skills in other fields like graphic
            designing or web development.
          </p>
          <br />
          <p>
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs. when I'm not pushing pixels, you'll find me
            engaged in different kind of activities.
          </p>
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
                <img src="./image/nodejs.png" alt="" />
              </li>
              <li>
                <img src="./image/mongodb.png" alt="" />
              </li>
              <li>
                <img src="./image/github.png" alt="" />
              </li>
              <li>
                <img src="./image/netlify.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
