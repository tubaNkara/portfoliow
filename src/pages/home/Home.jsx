import "./Home.scss"
import React from "react-icons";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Navbar from "../../components/navbar/Navbar"

const Home = () => {
  return (
    <div>
      <>
        <title>Çarşamba</title>
        <div className="home-bgImg-container">
        
          <main className="home">
            <h2>Hi! My Name Is</h2>
            <h1 className="home__name">
              Wednesday <span className="home__name--last">Addams</span>
            </h1>
            <h2>Full Stack Web Developer</h2>
          </main>
          {/* HOME FOOTER */}
          <footer className="horizontal">
            <div className="social-icons">
              <a href="#">
                <FaTwitter className="fa-2x" />
              </a>
              <a href="#">
                <FaFacebook className="fa-2x" />
              </a>
              <a href="#">
                <FaInstagram className="fa-2x" />
              </a>
              <a href="#">
                <FaGithub className="fa-2x" />
              </a>
            </div>
            <div className="copyright">© Copyright 2023</div>
          </footer>
        </div>
      </>
      ;
    </div>
  );
}

export default Home
