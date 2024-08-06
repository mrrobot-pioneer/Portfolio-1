import "../styles/home.css";
import Settings from "./Settings";
import React from "react";

export default function Home({ home }) {
  return (
    <section id="home" ref={home}>
      <div className="info">
        <h3 className="home-name">
          Hi, I'm <span>John Doe</span>
        </h3>

        <h3 className="home-profession">
          I'm a <span>Web Developer</span>
        </h3>

        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime saepe
          iste soluta ipsam dicta explicabo, harum, optio ullam odio vel
          voluptatem similique, ad provident blanditiis doloribus porro placeat
          velit reiciendis.
        </p>

        <div className="buttons-container">
          <a href="/hire-me">
            <button className="hire-me button-primary" href="#">
              Hire Me
            </button>
          </a>
          <a href="#projects">
            <button className="button-primary projects-btn">My Projects</button>
          </a>
        </div>

        <div className="social-icons-container">
          <a href="#" className="social">
            <i className="bx bxl-whatsapp"></i>
          </a>
          <a href="#" className="social">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="#" className="social">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="social">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="profile">
        <span className="top"></span>
        <span className="bottom"></span>
        <img src="profile.png" alt="my-profile" />
      </div>

      {/* Settings Container*/}
      <Settings />
    </section>
  );
}
