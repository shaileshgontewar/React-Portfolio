const Portfolio = () => {
  return (
    <>
      <div className="portfolio-box">
        <div className="portfolio-heading" id="portfolio">
          My Portfolio
        </div>
        <div className="portfolio-list">
          <a
            href="https://shaileshgontewar.github.io/clockxd/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./image/clock.png" alt="" className="project-img" />
          </a>
          <a
            href="https://react-blogshailesh.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./image/react-blog.png" alt="" className="project-img" />
          </a>
          <a href="" target="_blank" rel="noreferrer">
            <img src="./image/todo-app.png" alt="" className="project-img" />
          </a>
          <a
            href="https://shaileshtech.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./image/E-commerse-pic.png
                "
              alt="E-commerce"
              className="project-img"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
