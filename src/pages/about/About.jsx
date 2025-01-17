import React from 'react'

const About = () => {
  return (
    <div>
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="css/main.css" />
        <title>Portfolio-About</title>
        <div className="about-bgImg-container">
          {/* ABOUT NAV */}
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="index.html" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="about.html" className="nav__link nav__link--active">
                  About Me
                </a>
              </li>
              <li className="nav__item">
                <a href="projects.html" className="nav__link">
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
          <div className="about__bio-image">
            <h2>BIO</h2>
            <p>
              Wednesday Addams is a fictional character from the Addams Family
              multimedia franchise created by American cartoonist Charles
              Addams. She is typically portrayed as a morbid and emotionally
              reserved child that is fascinated by the macabre, often identified
              by her pale skin and black pigtails. Wednesday has been portrayed
              by several actresses in various films and television series,
              including Lisa Loring in the television series The Addams Family
              (1964), Christina Ricci in the feature films The Addams Family
              (1991) and Addams Family Values (1993), and Jenna Ortega in the
              streaming television series Wednesday (2022).
            </p>
          </div>
        </div>
        {/* ABOUT MAIN */}
        <main className="about">
          <div className="about__container">
            <div className="about__job">
              <h2 className="text-secondary">2020 - 2021</h2>
              <h3>CLARUSWAY</h3>
              <h6>Instructor &amp; Full Stack Developer</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat vero dolores eum ut, culpa ullam quis quasi
                exercitationem in adipisci.
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2019 - 2020</h2>
              <h3>Google</h3>
              <h6>Front End Developer</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat vero dolores eum ut, culpa ullam quis quasi
                exercitationem in adipisci.
              </p>
            </div>
            <div className="about__job">
              <h2 className="text-secondary">2017 - 2019</h2>
              <h3>The Best Websites Co.</h3>
              <h6>Front End Developer</h6>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat vero dolores eum ut, culpa ullam quis quasi
                exercitationem in adipisci.
              </p>
            </div>
          </div>
        </main>
        {/* ABOUT FOOTER */}
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

export default About
