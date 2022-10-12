const Portfolio = () => {
  return (
    <>
      <div className="portfolio-box" id="portfolio">
        <div className="portfolio-heading">My Portfolio</div>
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
          <a
            href="https://react-blogshailesh1.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
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
              className="project-img4"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
