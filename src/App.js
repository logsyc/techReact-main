import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#section-about" className="navigation__link">
                About Us
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                Our Services
              </a>
            </li>
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                Why Us?
              </a>
            </li>
            <li className="navigation__item">
              <a href="#section-book" className="navigation__link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <header className="header">
        <div className="header__logo-box">
          <img src={require("./images/logo.png")} alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">TechMotion</span>
            <span className="heading-primary--sub">
              Expert Staffing and Technology Consulting Solutions
            </span>
          </h1>
          <a href="#section-about" className="btn btn--white btn--animated">
            Learn More
          </a>
        </div>
      </header>
      <main>
        <section className="section-about" id="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">About US</h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              
              <p className="paragraph">
                Tech Motion is a leading recruiting firm that provides top-notch
                technical talent to the industry. With a reputation as a provider of
                IT Services for recruiting and staffing industry experts, we are
                dedicated to connecting the best tech jobs with the most talented
                professionals.
              </p>
              
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt=""
                  className="composition__photo composition__photo--p1"
                  src={require("./images/nat-1-large.jpg")}
                />
                <img
                  
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt=""
                  className="composition__photo composition__photo--p2"
                  src={require("./images/nat-2-large.jpg")}
                />
                <img
                  
                  sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                  alt=""
                  className="composition__photo composition__photo--p3"
                  src={require("./images/nat-3-large.jpg")}
                />
                
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary" style={{ color: "white" }}>
              What We Offer
            </h2>
          </div>
          <div className="row">
            <div className="col-3-of-4">
              <div className="feature-box ">
                <i className="fa-solid fa-briefcase feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  IT STAFFING
                </h3>
                <p className="feature-box__text">
                  TechMotion has extensive capabilities in the IT staffing and
                  consulting landscape.
                </p>
              </div>
            </div>
            <div className="col-3-of-4">
              <div className="feature-box">
                <i className="fa-solid fa-circle-check feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Automated Testing
                </h3>
                <p className="feature-box__text">
                  Automated and Manual testing services to ensure great user
                  experience for any product.
                </p>
              </div>
            </div>
            <div className="col-3-of-4">
              <div className="feature-box">
                <i className="fa-solid fa-circle-check feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Manual Testing
                </h3>
                <p className="feature-box__text">
                  Automated and Manual testing services to ensure great user
                  experience for any product.
                </p>
              </div>
            </div>
            <div className="col-3-of-4">
              <div className="feature-box">
                <i className="fa-solid fa-bullseye feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Oppurtunites
                </h3>
                <p className="feature-box__text">
                  Find &amp; capture career opportunities in the IT industry to
                  frame a successful career.
                </p>
              </div>
            </div>
            <div className="col-3-of-4">
              <div className="feature-box">
                <i className="fa-solid fa-gears feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Consulting
                </h3>
                <p className="feature-box__text">
                  TechMotion has extensive capabilities in the IT staffing and
                  consulting landscape.
                </p>
              </div>
            </div>
            <div className="col-3-of-4">
              <div className="feature-box">
                <i className="fa-solid fa-graduation-cap feature-box__icon" />
                <h3 className="heading-tertiary u-margin-bottom-small">Training</h3>
                <p className="feature-box__text">
                  Upskill yourself with latest IT courses and stay ahead in the
                  competition.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">How We Do it</h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      Education And Training
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li style={{ fontSize: "2rem" }}>
                        Automated and Manual testing services to ensure great user
                        experience for any product.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only"></p>
                      <h2 className="heading-secondary" style={{ color: "white" }}>
                        roadmap and strategy
                      </h2>
                      <p />
                      <p
                        className=""
                        style={{ fontSize: "2rem", marginTop: "4rem" }}
                      >
                        Find &amp; capture career opportunities in the IT industry
                        to frame a successful career.
                      </p>
                    </div>
                    <a href="section-book" className="btn btn--white">
                      Contact-Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-2">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      Education And Training
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li style={{ fontSize: "2rem" }}>
                        Automated and Manual testing services to ensure great user
                        experience for any product.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only"></p>
                      <h2 className="heading-secondary" style={{ color: "white" }}>
                        roadmap and strategy
                      </h2>
                      <p />
                      <p
                        className=""
                        style={{ fontSize: "2rem", marginTop: "4rem" }}
                      >
                        Find &amp; capture career opportunities in the IT industry
                        to frame a successful career.
                      </p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Contact-Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
              Discover More
            </a>
          </div>
        </section>
        
        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Send Us A Mail </h2>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email"
                      id="name"
                      required=""
                    />
                    <label htmlFor="email" className="form__label">
                      Email
                    </label>
                  </div>
                  <div className="form__group">
                    {/* <input type="email" class="form__input" placeholder="Email address" id="email"
                                  required>
                              <label for="email" class="form__label">Email address</label> */}
                    <textarea
                      name=""
                      className="form__input"
                      id=""
                      cols={25}
                      rows={10}
                      style={{
                        border: "none",
                        outline: "none",
                        padding: "1.3rem 2rem"
                      }}
                      placeholder="Write your query here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="form__group">
                    <button className="btn btn--green">
                      <a
                        style={{ textDecoration: "none", color: "white" }}
                        href="mailto: info@techmotionccs.net"
                      >
                        Send Mail →
                      </a>{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__logo-box">
          <picture className="footer__logo">
            <source
              // srcSet="images/logo-green-small-1x.png 1x, images/logo.png 2x"
              media="(max-width: 37.5em)"
            />
            <img
              // srcSet="images/logo-green-1x.png 1x, images/logo.png 2x"
              alt="Full logo"
              src={require("./images/logo.png")}
            />
          </picture>
        </div>
        <hr className="footer__br"></hr>  
        <div className="row">
          <div className="col-1-of-3">
            
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    <i className="fa-brands fa-facebook-f fa-2x" />
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    <i className="fa-brands fa-linkedin fa-2x" />
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    <i className="fa-brands fa-instagram fa-2x" />
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    <i className="fa-brands fa-github fa-2x" />
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      </>

  );
}

export default App;
