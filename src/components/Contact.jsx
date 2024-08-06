import "../styles/contact.css";

export default function Contact({ contact }) {
  return (
    <section className="contact" id="contact" ref={contact}>
      <h2 className="contact-header">
        Contact <span>Me</span>{" "}
      </h2>

      <div className="contacts-container">
        <div className="contact-wrapper">
          <div className="contact-top-section">
            <i className="bx bxs-phone-call"></i>
            <p>Call Me On:</p>
          </div>
          <p className="value">+1-998-145-176</p>
        </div>

        <span className="line"></span>

        <div className="contact-wrapper">
          <div className="contact-top-section">
            <i className="bx bxs-location-plus"></i>
            <p>My Office:</p>
          </div>
          <p className="value">NewYork, USA</p>
        </div>

        <span className="line"></span>

        <div className="contact-wrapper">
          <div className="contact-top-section">
            <i className="bx bxs-envelope"></i>
            <p>Email Me:</p>
          </div>
          <p className="value">example@gmail.com</p>
        </div>
      </div>

      <form className="form">
        <h3 className="form-title">Send me an email</h3>
        <div className="contact-row">
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            name="phone"
            className="phone"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="contact-row">
          <input
            type="text"
            name="email"
            className="email"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            name="subject"
            className="subject"
            placeholder="Subject"
            required
          />
        </div>

        <textarea
          name="message"
          className="message"
          id="message"
          placeholder="Your Message"
          cols="30"
          rows="10"
          required
        />

        <button className="button-primary submit">Submit</button>
      </form>
    </section>
  );
}
