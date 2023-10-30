import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <div className="about-bx">
              <h2>About Me</h2>
              <p>
                A self-taught developer stepping into tech after a career in
                healthcare.
              </p>
              <p>
                After taking a leap of faith and honing my skills in the digital
                landscape, I've learned to not only appreciate, but also to
                create and design my own intuitive and minimalistic web
                applications.
              </p>
              <p>
                When I'm not developing, I'm typically designing and creating
                nail art, trying out new recipes in the kitchen, working out, or
                adventuring in some sort of RPG.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
