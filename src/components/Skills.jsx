import "../styles/skills.css";

export default function Skills({ skills }) {
  return (
    <section className="skills" id="skills" ref={skills}>
      <h2 className="skills-header">
        My <span>Skills</span>
      </h2>

      <div className="skills-grid">
        <div className="sk-column">
          <h2 className="sk-column-title">Coding Skills</h2>
          <div className="container">
            <div className="skill">
              <div className="skill-top">
                <span>HTML & CSS</span>
                <span>90%</span>
              </div>
              <progress value={90} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <progress value={85} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>Python</span>
                <span>95%</span>
              </div>
              <progress value={95} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>Java</span>
                <span>45%</span>
              </div>
              <progress value={45} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>C</span>
                <span>30%</span>
              </div>
              <progress value={30} max={100}></progress>
            </div>
          </div>
        </div>

        <div className="sk-column">
          <h2 className="sk-column-title professional">Professional Skills</h2>
          <div className="container">
            <div className="skill">
              <div className="skill-top">
                <span>Web Development</span>
                <span>95%</span>
              </div>
              <progress value={95} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>Web Design</span>
                <span>87%</span>
              </div>
              <progress value={87} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>Artificial Intelligence</span>
                <span>82%</span>
              </div>
              <progress value={82} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>Mobile App Dev.</span>
                <span>80%</span>
              </div>
              <progress value={80} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>Robotics</span>
                <span>98%</span>
              </div>
              <progress value={98} max={100}></progress>
            </div>
          </div>
        </div>

        <div className="sk-column">
          <h2 className="sk-column-title professional">Other Skills</h2>
          <div className="container">
            <div className="skill">
              <div className="skill-top">
                <span>Digital Marketing</span>
                <span>82%</span>
              </div>
              <progress value={85} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>Graphics Design</span>
                <span>90%</span>
              </div>
              <progress value={90} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>Video Editing</span>
                <span>55%</span>
              </div>
              <progress value={55} max={100}></progress>
            </div>

            <div className="skill">
              <div className="skill-top">
                <span>Forex Trading</span>
                <span>93%</span>
              </div>
              <progress value={93} max={100}></progress>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
