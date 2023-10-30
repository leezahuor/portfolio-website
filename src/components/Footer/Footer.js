import { Col, Container, Row } from "react-bootstrap";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={""} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src="" alt="Icon" />
              </a>
              <a href="#">
                <img src="" alt="Icon" />
              </a>
              <a href="#">
                <img src="" alt="Icon" />
              </a>
            </div>
          </Col>
        </Row> */}
        <p> &#169; 2023 Leeza Huor</p>
      </Container>
    </footer>
  );
};

export default Footer;
