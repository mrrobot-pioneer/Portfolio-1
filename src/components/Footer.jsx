import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a className="scroll-top" href="#home">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
      <p>
        Thank you for visiting my portfolio. Let's connect and create something
        amazing together !
      </p>

      <div className="socials-footer">
        <a href="#" className="social">
          <i className="bx bxl-whatsapp"></i>
        </a>
        <a href="#" className="social">
          <i className="bx bxl-facebook-circle"></i>
        </a>
        <a href="#" className="social">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#" className="social">
          <i className="bx bxl-linkedin"></i>
        </a>
      </div>

      <p>
        &copy; 2024{" "}
        <a
          className="primeelements-link"
          href="https://primeelements.pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          PrimeElements
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
}
