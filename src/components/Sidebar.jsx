import "../styles/sidebar.css";
import React from "react";

export default function Sidebar({
  home,
  about,
  education,
  skills,
  projects,
  contact,
}) {
  const [isShown, setIsShown] = React.useState(false);

  function showSidebar() {
    setIsShown(true);
  }

  function hideSidebar() {
    setIsShown(false);
  }

  return (
    <nav>
      <ul className={isShown ? "sidebar show-sidebar" : "sidebar"}>
        {isShown ? (
          <i className="bx bx-x sidebar-cross" onClick={hideSidebar}></i>
        ) : (
          <i className="bx bx-menu hamburger-menu" onClick={showSidebar}></i>
        )}

        <div className="logo-container">
          <span className="top"></span>
          <span className="bottom"></span>
          <div className="logo-img-wrapper">
            <img src="profile.png" alt="logo" />
          </div>
          <span className="logo-text">John Doe</span>
        </div>

        <li>
          <a className="menu" ref={home} href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="menu" ref={about} href="#about">
            About
          </a>
        </li>
        <li>
          <a className="menu" ref={education} href="#education">
            Education
          </a>
        </li>
        <li>
          <a className="menu" ref={skills} href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="menu" ref={projects} href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="menu" ref={contact} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
