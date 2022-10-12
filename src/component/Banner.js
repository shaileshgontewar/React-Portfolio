const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="inner-banner">
          <div className="banner-text box">
            <p className="banner-name">Hi, I am Shailesh Gontewar</p>
            <p className="banner-developer">A Full-Stack Developer</p>
            <p className="banner-description">
              I develop projects and Innovation is my passion .
            </p>
            <div className="button">
              <button className="hireme-btn">
                <a href="#contact" alt="">
                  Hire Me
                </a>
              </button>
              <button className="getresume-btn">
                <a href="resume" target="_blank">
                  Get Resume
                </a>
              </button>
            </div>
          </div>
          <div className="banner-img box">
            <img src="./image/shailesh.jpeg" alt="img" width="" height="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
