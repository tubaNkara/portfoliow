import "./Projects.scss"



const Projects = () => {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="css/main.css" />
        <title>Portfolio-Projects</title>
        <div className="project-bgImg-container">
          {/* PROJECT NAV */}
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="index.html" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="about.html" className="nav__link">
                  About Me
                </a>
              </li>
              <li className="nav__item">
                <a href="projects.html" className="nav__link nav__link--active">
                  My Projects
                </a>
              </li>
              <li className="nav__item">
                <a href="contact.html" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="projects__bio-image">
            <h1>My Projects</h1>
          </div>
        </div>
        {/* PROJECT MAIN */}
        <main className="projects">
          <div className="projects__items">
            <div className="projects__item">
              <img src="img/project-1.jpg" alt="My Project" />
            </div>
            <div className="projects__item">
              <img src="img/project-2.jpg" alt="My Project" />
            </div>
            <div className="projects__item">
              <img src="img/project-3.jpg" alt="My Project" />
            </div>
            <div className="projects__item">
              <img src="img/project-4.jpg" alt="My Project" />
            </div>
            <div className="projects__item">
              <img src="img/project-5.jpg" alt="My Project" />
            </div>
            <div className="projects__item">
              <img src="img/project-6.jpg" alt="My Project" />
            </div>
          </div>
        </main>
        {/* PROJECT FOOTER */}
        <footer className="vertical">
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-twitter fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-facebook fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-instagram fa-2x" />
            </a>
            <a href="#">
              <i className="fab fa-github fa-2x" />
            </a>
          </div>
          <div className="copyright">© Copyright 2023</div>
        </footer>
      </>
    </div>
  );
}

export default Projects
