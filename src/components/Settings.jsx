import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeContext";
import "../styles/settings.css";

export default function Settings() {
  const { theme, mode, changeTheme, toggleMode } = useTheme();
  const [show, setShow] = useState(false);

  const showSettings = () => setShow(true);
  const hideSettings = () => setShow(false);

  useEffect(() => {
    const handleScroll = () => {
      if (show) {
        setShow(false); // Hide settings when scrolling
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [show]); // Only re-run the effect if 'show' changes

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
          onClick={() => changeTheme("default-theme")}
        ></div>
        <div
          className="theme-color-1"
          onClick={() => changeTheme("theme-1")}
        ></div>
        <div
          className="theme-color-2"
          onClick={() => changeTheme("theme-2")}
        ></div>
        <div
          className="theme-color-3"
          onClick={() => changeTheme("theme-3")}
        ></div>
        <div
          className="theme-color-4"
          onClick={() => changeTheme("theme-4")}
        ></div>
      </div>

      <div className="mode-container">
        <p className="mode-name">Dark Mode</p>
        <div className="toggler">
          <input
            className="toggler_input"
            id="toggler_check"
            type="checkbox"
            checked={mode === "dark-mode"}
            onChange={toggleMode}
          />
          <label className="toggler_label" htmlFor="toggler_check">
            Toggle
          </label>
        </div>
      </div>
    </div>
  );
}
