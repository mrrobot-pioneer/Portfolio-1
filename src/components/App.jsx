import { useRef, useEffect } from "react";
import Sidebar from "./Sidebar.jsx";
import Main from "./Main.jsx";

export default function App() {
  const sections = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "contact",
  ];

  const sectionRefs = sections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});

  const menuRefs = sections.reduce((acc, section) => {
    acc[section] = useRef(null);
    return acc;
  }, {});

  function setActive(sectionRef, menuRef) {
    const top = window.scrollY;
    const offset = sectionRef.current.offsetTop - 100;
    const height = sectionRef.current.offsetHeight;

    if (top >= offset && top < offset + height) {
      menuRef.current.style.color = "var(--main-color)";
      menuRef.current.parentElement.style.boxShadow =
        "0 0 4px 0.1px var(--main-color)";
    } else {
      menuRef.current.style.color = "var(--text-color)";
      menuRef.current.parentElement.style.boxShadow = "none";
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        setActive(sectionRefs[section], menuRefs[section]);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <>
      <Sidebar
        home={menuRefs.home}
        about={menuRefs.about}
        education={menuRefs.education}
        skills={menuRefs.skills}
        projects={menuRefs.projects}
        contact={menuRefs.contact}
      />
      <Main
        home={sectionRefs.home}
        about={sectionRefs.about}
        education={sectionRefs.education}
        skills={sectionRefs.skills}
        projects={sectionRefs.projects}
        contact={sectionRefs.contact}
      />
    </>
  );
}
