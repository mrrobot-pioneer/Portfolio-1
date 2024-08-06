import "../styles/project.css";

export default function Project({ thumbnail, title, description }) {
  return (
    <div className="project">
      <div className="image">
        <img src={thumbnail} alt="" />
      </div>

      <h2>{title}</h2>
      <p>{description}</p>
      <a href="#">
        <button className="button-primary">
          See More <i className="bx bxs-chevrons-right"></i>
        </button>
      </a>
    </div>
  );
}
