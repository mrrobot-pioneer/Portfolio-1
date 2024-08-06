import "../styles/settings.css";
import { useEffect, useState, useRef } from "react";

export default function Settings() {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("dark");

  const showSettings = () => setShow(true);
  const hideSettings = () => setShow(false);

  useEffect(() => {
    const handleScroll = () => {
      if (show) {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show]);

  useEffect(() => {
    const darkModeLink = document.querySelector(".dark-mode");
    const lightModeLink = document.querySelector(".light-mode");

    if (darkModeLink && lightModeLink) {
      if (mode === "dark") {
        darkModeLink.removeAttribute("disabled");
        lightModeLink.setAttribute("disabled", "true");
        console.log("Dark mode enabled");
      } else {
        lightModeLink.removeAttribute("disabled");
        darkModeLink.setAttribute("disabled", "true");
        console.log("Light mode enabled");
      }
    } else {
      console.log("Dark or light mode link not found");
    }
  }, [mode]);

  const themeLinks = useRef([]);
  useEffect(() => {
    themeLinks.current = document.querySelectorAll(".theme-color");
    console.log("Theme links found:", themeLinks.current);
  }, []);

  const activeTheme = (themeColor) => {
    themeLinks.current.forEach((link) => {
      console.log(link.classList, link.classList.contains(themeColor));
      if (link.classList.contains(themeColor)) {
        link.removeAttribute("disabled");
        console.log(`${themeColor} theme enabled`);
      } else {
        link.setAttribute("disabled", "true");
        console.log(`${link.classList} theme disabled`);
      }
    });
  };

  return (
    <div
      className={
        show ? "settings-container show-settings" : "settings-container"
      }
    >
      {show ? (
        <i className="cross bx bx-x" onClick={hideSettings}></i>
      ) : (
        <i className="settings bx bx-cog" onClick={showSettings}></i>
      )}

      <p className="title">Choose Theme Color</p>
      <div className="colors-container">
        <div
          className="default-theme-color"
          onClick={() => activeTheme("default-theme-color")}
        ></div>
        <div
          className="theme-color-1"
          onClick={() => activeTheme("theme-color-1")}
        ></div>
        <div
          className="theme-color-2"
          onClick={() => activeTheme("theme-color-2")}
        ></div>
        <div
          className="theme-color-3"
          onClick={() => activeTheme("theme-color-3")}
        ></div>
        <div
          className="theme-color-4"
          onClick={() => activeTheme("theme-color-4")}
        ></div>
      </div>

      <div className="mode-container">
        <p className="mode-name">Dark Mode</p>
        <div className="toggler">
          <input
            className="toggler_input"
            id="toggler_check"
            type="checkbox"
            checked={mode === "dark"}
            onChange={() => setMode(mode === "dark" ? "light" : "dark")}
          />
          <label className="toggler_label" htmlFor="toggler_check">
            Toggle
          </label>
        </div>
      </div>
    </div>
  );
}
