import "../styles/about.css";

export default function About({ about }) {
  return (
    <section id="about" ref={about}>
      <h2 className="about-header">
        About <span>Me</span>
      </h2>

      <h3 className="about-title">
        <span>I'm John Doe, </span>
        <span className="about-profession">A Web Developer</span>
      </h3>

      <p className="about-description" id="about-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor atque,
        sapiente reprehenderit dignissimos itaque esse ex, quos omnis accusamus
        fuga iste error amet aliquid nemo voluptatem perferendis architecto
        expedita mollitia? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Quaerat distinctio laboriosam sit quod. Debitis dicta iure a minus
        ab repellendus est numquam sit distinctio impedit facere, veritatis,
        dolores dolor nobis.{" "}
      </p>

      <div className="details-wrapper">
        <h3 className="details-header">My Details</h3>
        <div className="personal-details">
          <div className="left-column">
            <div className="row">
              Full Name:<span>John Doe</span>
            </div>
            <div className="row">
              Birth Date:<span>28th October, 2000</span>
            </div>
            <div className="row">
              Age:<span>23 years</span>
            </div>
            <div className="row">
              Gender:<span>Male</span>
            </div>
            <div className="row">
              Nationality:<span>American</span>
            </div>
          </div>

          <div className="right-column">
            <div className="row">
              Phone Number:
              <span>+1-998-145-176</span>
            </div>
            <div className="row">
              Email:
              <span>example@gmail.com</span>
            </div>
            <div className="row">
              Bachelor's Degree:
              <span>Computer Science, MIT</span>
            </div>
            <div className="row">
              Masters Degree:<span>Harvard University</span>
            </div>
            <div className="row">
              PhD:<span>Harvard University</span>
            </div>
          </div>
        </div>
      </div>

      <div className="buttons-container">
        <a href="/hire-me">
          <button className="hire-me button-primary">Hire Me</button>
        </a>
        <button className="download-cv button-primary">Download CV</button>
      </div>
    </section>
  );
}
