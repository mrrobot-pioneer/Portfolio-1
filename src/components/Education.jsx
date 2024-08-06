import "../styles/education.css";

export default function Education({ education }) {
  return (
    <section className="education" id="education" ref={education}>
      <h2 className="education-header">
        Education & <span>Experience</span>
      </h2>

      <div className="education-grid">
        <div className="ed-column">
          <h3 className="ed-column-header">Education</h3>

          <div className="item">
            <div className="item-date">
              <i className="bx bx-calendar"></i>
              Sep 2022 - June 2027
            </div>
            <div className="item-title">
              Bachelor's Degree{" "}
              <span className="school">- Harvard University</span>
            </div>
            <p className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              cum eligendi modi quod architecto accusantium porro autem hic
              animi. Porro illum perferendis vitae iste expedita voluptas ipsa
              non iusto vero!
            </p>
          </div>

          <div className="item">
            <div className="item-date">
              <i className="bx bx-calendar"></i>
              Sep 2022 - June 2027
            </div>
            <div className="item-title">
              Master's Degree <span className="school">- MIT University</span>
            </div>
            <div className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              qui exercitationem illo a, ratione placeat deleniti asperiores
              eligendi veniam eos aliquam debitis aliquid sint esse odio magnam
              commodi temporibus fugiat.
            </div>
          </div>

          <div className="item">
            <div className="item-date">
              <i className="bx bx-calendar"></i>
              Sep 2022 - June 2027
            </div>
            <div className="item-title">
              PhD Degree <span className="school">- Harvard University</span>
            </div>
            <div className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              quasi minima cumque accusantium provident quas delectus libero
              repellendus doloremque. Inventore veniam quae tempora adipisci
              esse mollitia sint hic ad non?
            </div>
          </div>
        </div>

        <div className="ed-column">
          <h3 className="ed-column-header experience">Experience</h3>

          <div className="item">
            <div className="item-date">
              <i className="bx bx-calendar"></i>
              Mar 2022 - Jan 2023
            </div>
            <div className="item-title">
              Frontend Dev. <span className="company">- Google</span>
            </div>
            <div className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              recusandae corrupti nobis, quo hic consequatur ipsam molestiae,
              voluptates accusantium ut odit at, beatae sunt harum voluptas
              asperiores perspiciatis quas labore.
            </div>
          </div>

          <div className="item">
            <div className="item-date">
              <i className="bx bx-calendar"></i>
              Jan 2023 - Oct 2023
            </div>
            <div className="item-title">
              Mobile App Dev. <span className="company">- TopThink Inc.</span>
            </div>
            <div className="item-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              ullam voluptatibus quae nihil veritatis minima alias voluptates
              fugit cum unde nostrum tenetur et, possimus aperiam ipsam incidunt
              earum adipisci dolorum.
            </div>
          </div>

          <div className="item">
            <div className="item-date">
              <i className="bx bx-calendar"></i>
              Oct 2023 - to date
            </div>
            <div className="item-title">
              Robotics Engineer{" "}
              <span className="company">- Autobox Energies</span>
            </div>
            <div className="item-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
              at earum saepe nulla neque aliquid voluptate, et vitae nostrum
              similique deleniti, voluptatum ut in veritatis officia fugiat quos
              quia aperiam!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
