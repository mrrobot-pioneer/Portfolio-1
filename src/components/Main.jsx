import "../styles/main.css";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Main({
  home,
  about,
  education,
  skills,
  projects,
  contact,
}) {
  return (
    <main className="main">
      <Home home={home} />
      <About about={about} />
      <Education education={education} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact contact={contact} />
      <Footer />
    </main>
  );
}
