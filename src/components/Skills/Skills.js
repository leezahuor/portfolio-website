import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>My Skills</h2>
              <div>
                <div>
                  <div className="details-container">
                    <ul>
                      <li>ReactJS</li>
                      <li>Javascript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Python</li>
                      <li>Git</li>
                      <li>Jira</li>
                      <li>Firebase</li>
                      <li>MongoDB</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
