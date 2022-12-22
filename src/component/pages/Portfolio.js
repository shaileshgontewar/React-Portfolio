const Portfolio = () => {
  return (
    <>
      <div className="portfolio-box">
        <div className="portfolio-heading">
          Have a look at my <span>Projects</span>
        </div>
        <div className="portfolio-list">
          <div>
            <img src="./image/clock.png" alt="" className="project-img" />
            <div className="project-information">
              <h2>Clock</h2>
              <p>
                This is a simple app which asks user to enter time and then it
                returns message with image and i created this by using html,css
                and Javascript
              </p>
              <div className="porject-btn">
                <button className="live-btn">
                  <a
                    href="https://shaileshgontewar.github.io/clockxd/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Project
                  </a>
                </button>
                <button className="view-btn">View Project</button>
              </div>
            </div>
          </div>
          <div>
            <img src="./image/react-blog.png" alt="" className="project-img" />
            <div className="project-information">
              <h2>Blog</h2>
              <p>
                In this blog , you can read news and there are three types of
                news I created this blog webside by using React or reusable
                function component and react library and axios library for data
                fetching,css
              </p>
              <div className="porject-btn">
                <button className="live-btn">
                  <a
                    href="https://shailesh-blog.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Project
                  </a>
                </button>
                <button className="view-btn">View Project</button>
              </div>
            </div>
          </div>
          <div>
            <img src="./image/shopping.png" alt="" className="project-img" />
            <div className="project-information">
              <h2>Shopping</h2>
              <p>
                In this shopping app , you can add product in cart, I created
                this shopping webside by using React or reusable function
                component and react library and axios library for data
                fetching,css
              </p>
              <div className="porject-btn">
                <button className="live-btn">
                  <a
                    href="https://shaileshshoppingcart.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Project
                  </a>
                </button>
                <button className="view-btn">View Project</button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="./image/E-commerse-pic.png
                "
              alt="E-commerce"
              className="project-img4"
            />
            <div className="project-information">
              <h2>E-commerse</h2>
              <p>
                In this shopping app , you can add product in cart, I created
                this shopping webside by using React or reusable function
                component and react library and axios library for data
                fetching,css
              </p>
              <div className="porject-btn">
                <button className="live-btn">
                  <a
                    href="https://shaileshtech.netlify.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Project
                  </a>
                </button>
                <button className="view-btn">View Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
