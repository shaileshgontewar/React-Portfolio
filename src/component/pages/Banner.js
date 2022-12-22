const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="inner-banner">
          <div className="banner-text box">
            <p className="banner-name">
              <span>Hi there, my name is</span> Shailesh Gontewar.
            </p>
            <p className="banner-developer">Front-End Developer.</p>
            <p className="banner-description">
              I am a working professional who just started learning coding I
              have develop projects.
            </p>
            <div className="button">
              <button className="hireme-btn">
                <a href="#contact" alt="">
                  Hire Me
                </a>
              </button>
              <button className="getresume-btn">
                <a href="./shailesh.pdf" download="shailesh.pdf">
                  Get Resume
                </a>
              </button>
            </div>
          </div>
          <div className="banner-img box"></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
