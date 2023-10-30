import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import ExampleResume from "../assets/resume-example.pdf";
import "./index.css";

const Home = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          {/* <Col xs={12} md={6} xl={7}> */}
          <Col>
            <span className="tagline">Hey! I'm</span>
            <h1>Leeza Huor</h1>
            <p>A Frontend Developer</p>
            <div className="button-container">
              <button
                className="button-color-2"
                role="link"
                onClick={() => openInNewTab(ExampleResume)}
              >
                Download Resume
              </button>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                <button
                  className="button-color-1"
                  onClick={() => onUpdateActiveLink("contact")}
                >
                  <span>Contact Info</span>
                </button>
              </Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
