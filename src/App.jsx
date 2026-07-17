import React, {useState} from "react";
import "./index.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <a className="nav-logo" href="#">
          Elementum
        </a>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#studio" onClick={toggleMenu}>
              Studio
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li>
            <a href="#faqs" onClick={toggleMenu}>
              FAQ's
            </a>
          </li>
        </ul>

        <button
          className="nav-hamburger"
          aria-label="Open Menu"
          onClick={toggleMenu}
        >
          <img className="line" src="/images/nav-images/nav-line.svg" />
          <img className="line" src="/images/nav-images/nav-line.svg" />
        </button>
      </nav>

      {/* Hero Section */}
      <main className="hero-section">
        <img
          src="/images/hero-images/side-curvy-line1.svg"
          alt="Left squiggle 1"
          className="shape-left-squiggle-1"
        />
        <img
          src="/images/hero-images/side-curvy-line2.svg"
          alt="Left squiggle 2"
          className="shape-left-squiggle-2"
        />
        <img
          src="/images/hero-images/semi-circle.svg"
          alt="semi circle image"
          className="shape-right-abstract"
        />

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="block-line">
              The{" "}
              <span className="highlight-relative">
                thinkers and
                <img
                  src="/images/hero-images/zigzag.svg"
                  alt="zigzag image"
                  className="shape-underline"
                />
              </span>
            </span>
            <span className="block-line">
              doers were <span className="highlight-pink">changing</span>
            </span>
            <span className="block-line">
              the <span className="highlight-green">status</span> Quo with
            </span>
          </h1>

          <p className="hero-description">
            We are a team of strategists, designers communicators, researchers.
            Togeather, <br className="desktop-break" />
            we belive that progress only hghappens when you refuse to play
            things safe.
          </p>
        </div>

        <div className="avatars-container">
          <img
            src="/images/hero-images/avatar6.png"
            alt="Avatar 1"
            title="Avatar1"
            className="avatar avatar-1"
          />
          <img
            src="/images/hero-images/avatar1.png"
            alt="Avatar 2"
            title="Avatar2"
            className="avatar avatar-2"
          />
          <img
            src="/images/hero-images/avatar8.png"
            alt="Avatar 3"
            title="Avatar3"
            className="avatar avatar-3"
          />
          <img
            src="/images/hero-images/avatar7.png"
            alt="Avatar 4"
            title="Avatar4"
            className="avatar avatar-4"
          />
          <img
            src="/images/hero-images/avatar5.png"
            alt="Avatar 5"
            title="Avatar5"
            className="avatar avatar-5"
          />
          <img
            src="/images/hero-images/avatar4.png"
            alt="Avatar 6"
            title="Avatar6"
            className="avatar avatar-6"
          />
          <img
            src="/images/hero-images/avatar3.png"
            alt="Avatar 7"
            title="Avatar7"
            className="avatar avatar-7"
          />
          <img
            src="/images/hero-images/avatar2.png"
            alt="Avatar 8"
            title="Avatar8"
            className="avatar avatar-8"
          />
        </div>
      </main>

      {/* Progress Section */}
      <section className="progress-section">
        <img
          className="bg-pink-glow"
          src="/images/progress-section-images/background-pink-glow.svg"
          alt="pink-glow"
        />
        <img
          src="/images/progress-section-images/progress-section-line1.svg"
          alt="Red connecting line"
          className="shape-red-line"
        />

        <div className="content-row">
          <div className="text-content">
            <h2 className="section-title">
              Tomorrow should
              <br />
              be better than today
            </h2>
            <img
              src="/images/progress-section-images/zigzag2.svg"
              alt="zigzag"
              className="shape-underline-tomorrow"
            />
            <img
              src="/images/progress-section-images/green-rectangle-2.svg"
              className="highlight-green-pill"
            />
            <p className="section-description">
              We are a team of strategists, designers communicators,
              researchers. Togeather, we belive that progress only happens when
              you refuse to play things safe.
            </p>
            <a href="#read-more" className="read-more-link">
              Read more <img src="/images/progress-section-images/arrow.svg" className="arrow-line" />
            </a>
          </div>

          <div className="image-content right-image-group">
            <img
              src="/images/progress-section-images/red-rectangle.svg"
              alt="Red square shape"
              className="shape-red-square"
            />
            <div className="circle-image-wrapper">
              <img
                src="/images/progress-section-images/progress-section-img1.png"
                alt="Team meeting"
                className="circle-img"
              />
            </div>
          </div>
        </div>

        <div className="content-row reverse-row">
          <div className="image-content left-image-group">
            <img
              src="/images/progress-section-images/back-triangle.svg"
              alt="Red triangle back"
              className="shape-triangle-back"
            />
            <div className="circle-image-wrapper2">
              <img
                src="/images/progress-section-images/progress-section-img2.png"
                alt="Coworkers at laptop"
                className="circle-img2"
              />
            </div>
            <img
              src="/images/progress-section-images/bottom-triangle.svg"
              alt="Red triangle front"
              className="shape-triangle-front"
            />
          </div>

          <div className="text-content2">
            <h2 className="section-title">
              See how we can
              <br /> help you progress
            </h2>
            <img
              src="/images/progress-section-images/zigzag3.svg"
              className="shape-underline-progress"
            />

            <img
              src="/images/progress-section-images/green-rectangle-3.svg"
              className="highlight-green-pill-alt"
            />
            <p className="section-description">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <a href="#read-more" className="read-more-link">
              Read more <img src="/images/progress-section-images/arrow2.svg" className="arrow-line2" />
            </a>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers-section">
        <div className="offers-header">
          <h2 className="offers-title">
            <span className="block-line">
              What we <span>can</span>
            </span>
            <span className="block-line">
              <span className="highlight-relative">offer</span> you!
            </span>
          </h2>
          <img
            src="/images/offer-section-images/green-rectangle-4.svg"
            className="highlight-green-pill-offer"
          />
          <img
            src="/images/offer-section-images/zigzag4.svg"
            alt="zigzag"
            className="shape-underline-offer"
          />
          <img
            src="/images/offer-section-images/offer-section-line.svg"
            alt="Red wave line"
            className="shape-red-wave"
          />
        </div>

        <div className="offers-list">
          <div className="offer-item border-top">
            <div className="offer-meta">
              Office of multiple
              <br />
              interest content
            </div>
            <div className="offer-main-title">Colaborative & partnership</div>
            <div className="offer-arrow-container">
              <img
                src="/images/offer-section-images/arrow3.svg"
                alt="Right Arrow"
                className="offer-arrow"
              />
            </div>
          </div>

          <div className="offer-item">
            <div className="offer-meta">
              The hanger US Air force
              <br />
              digital experimental
            </div>
            <div className="offer-main-title">We talk about our weight</div>
            <div className="offer-arrow-container">
              <img
                src="/images/offer-section-images/arrow3.svg"
                alt="Right Arrow"
                className="offer-arrow"
              />
            </div>
          </div>

          <div className="offer-item">
            <div className="offer-meta">
              Delta faucet content,
              <br />
              social, digital
            </div>
            <div className="offer-main-title title-relative">
              Piloting digital confidence
              <img
                src="/images/offer-section-images/offer-section-img.png"
                alt="Decorative graphic"
                className="offer-overlap-img"
              />
            </div>
            <div className="offer-arrow-container">
              <img
                src="/images/offer-section-images/arrow3.svg"
                alt="Right Arrow"
                className="offer-arrow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <img
          src="/images/testimonial-section-images/testimonial-img1.png"
          alt="Customer"
          className="testi-avatar testi-avatar-l1"
        />
        <img
          src="/images/testimonial-section-images/testimonial-img2.png"
          alt="Customer"
          className="testi-avatar testi-avatar-l2"
        />
        <img
          src="/images/testimonial-section-images/testimonial-img3.png"
          alt="Customer"
          className="testi-avatar testi-avatar-l3"
        />
        <img
          src="/images/testimonial-section-images/testimonial-img4.png"
          alt="Customer"
          className="testi-avatar testi-avatar-l4"
        />

        <img
          src="/images/testimonial-section-images/testimonial-img5.png"
          alt="Customer"
          className="testi-avatar testi-avatar-r1"
        />
        <img
          src="/images/testimonial-section-images/testimonial-img6.png"
          alt="Customer"
          className="testi-avatar testi-avatar-r2"
        />
        <img
          src="/images/testimonial-section-images/testimonial-img7.png"
          alt="Customer"
          className="testi-avatar testi-avatar-r3"
        />
        <img
          src="/images/testimonial-section-images/testimonial-img8.png"
          alt="Customer"
          className="testi-avatar testi-avatar-r4"
        />

        <div className="testimonial-content">
          <h2 className="testimonial-title">
            What our customer<br/> says About Us
            <img
              src="/images/testimonial-section-images/zigzag5.svg"
              alt="zigzag"
              className="shape-underline-testi"
            />
            <img
              src="/images/testimonial-section-images/green-rectangle-5.svg"
              alt="green pill"
              className="highlight-green-pill-testi"
            />
          </h2>

          <div className="testimonial-card">
            <img
              src="/images/testimonial-section-images/open-quotes.png"
              alt="Quote"
              className="quote-icon quote-left"
            />

            <p className="testimonial-text">
              Elementum delivered the site with inthe timeline
              <br />
              as they requested. Inthe end, the client found a 50%
              <br />
              increase in traffic with in days since its launch. They
              <br /> also had an impressive ability to use technologies that
              <br /> the company hasn`t used, which have also proved to
              <br /> be easy to use and reliable
            </p>

            <img
              src="/images/testimonial-section-images/close-quotes.png"
              alt="Quote"
              className="quote-icon quote-right"
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <img
          src="/images/footer-section-images/footer-semi-circle.svg"
          alt="Purple half circle"
          className="shape-purple-half"
        />

        <div className="newsletter-container">
          <div className="newsletter-header">
            <img
              src="/images/footer-section-images/footer-down-arrow.svg"
              alt="Red down arrows"
              className="shape-red-arrow1"
            />
            <img
              src="/images/footer-section-images/footer-down-arrow.svg"
              alt="Red down arrows"
              className="shape-red-arrow2"
            />
            <h2 className="newsletter-title">
              Subscribe to
              <br />
              our newsletter
            </h2>
          </div>
          <p className="newsletter-subtitle">
            To make your stay special and even more memorable
          </p>
          <button
            className="subscribe-btn"
            onClick={() => alert("Thanks for subscribing!")}
          >
            Subscribe Now
          </button>
        </div>

        <hr className="footer-divider" />

        <div className="footer-grid">
          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#studio">Studio</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Terms & Policies</h4>
            <ul className="footer-links">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#explore">Explore</a>
              </li>
              <li>
                <a href="#accessibility">Accesibility</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Follow Us</h4>
            <ul className="footer-links">
              <li>
                <a href="#instagram">Instagram</a>
              </li>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
              <li>
                <a href="#youtube">Youtube</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Terms & Policies</h4>
            <p className="footer-text">
              1498w Fluton ste, STE
              <br />
              2D Chicgo, IL 63867.
            </p>
            <p className="footer-text">(123) 456789000</p>
            <p className="footer-text">info@elementum.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          ©2023 Elementum. All rights reserved
        </div>
      </footer>
    </div>
  );
}

export default App;
