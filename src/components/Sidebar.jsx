import "../styles/sidebar.css";
import { useEffect, useState } from "react";

export default function Sidebar({
  home,
  about,
  education,
  skills,
  projects,
  contact,
}) {
  const [isShown, setIsShown] = useState(false);

  function showSidebar() {
    setIsShown(true);
  }

  function hideSidebar() {
    setIsShown(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (isShown) {
        setIsShown(false); // Hide sidebar when scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isShown]); // Only re-run the effect if 'show' changes

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
