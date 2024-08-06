import "../styles/projects.css";
import Project from "./Project";

export default function Projects({ projects }) {
  return (
    <section className="projects" id="projects" ref={projects}>
      <h2 className="projects-header">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        <Project
          thumbnail={"graphics-design.jpg"}
          title={"Graphics Design"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus."
          }
        />

        <Project
          thumbnail={"web-design.jpg"}
          title={"Web Design"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus."
          }
        />

        <Project
          thumbnail={"seo.jpg"}
          title={"SEO"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus."
          }
        />

        <Project
          thumbnail={"robotics.jpg"}
          title={"Robotics"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus."
          }
        />
      </div>
    </section>
  );
}
