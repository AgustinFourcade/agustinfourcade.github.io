import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []); // [] = Fired on mount

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">{/* React-Bootstrap */}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#academicFormation"
              className={
                activeLink === "academicFormation"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("academicFormation")}
            >
              Academic Formation
            </Nav.Link>
            <Nav.Link
              href="#workExperience"
              className={
                activeLink === "workExperience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("workExperience")}
            >
              Work Experience
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="#"
                onClick={() =>
                  window
                    .open(
                      "https://www.linkedin.com/in/agustin-fourcade/",
                      "_blank"
                    )
                    .focus()
                }
              >
                <img src={navIcon1} alt=""></img>
              </a>
              <a
                href="#"
                onClick={() =>
                  window
                    .open("https://www.instagram.com/aguss_fourcade/", "_blank")
                    .focus()
                }
              >
                <img src={navIcon3} alt=""></img>
              </a>
            </div>
            <button
              className="vvd"
              onClick={() =>
                window
                  .open(
                    "https://www.linkedin.com/in/agustin-fourcade/",
                    "_blank"
                  )
                  .focus()
              }
            >
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
