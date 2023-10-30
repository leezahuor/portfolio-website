import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";
import { Col, Container, Row } from "react-bootstrap";

const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8eo7ejt",
        "template_q88kk7y",
        refForm.current,
        "J9W4DYHy8hCXs9xKb"
      )

      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send message, please try again!");
        }
      );
  };

  return (
    <>
      <section className="contact" id="contact">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <div className="contact-bx">
                <div className="text-zone">
                  <h1>Contact Me</h1>
                  <p>Want to chat? Let's get in touch.</p>
                  <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                      <ul>
                        <li className="half">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                          />
                        </li>
                        <li className="half">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                          />
                        </li>
                        <li>
                          <textarea
                            placeholder="Your Message..."
                            name="message"
                            required
                          ></textarea>
                        </li>
                        <li>
                          <input
                            type="submit"
                            className="flat-button"
                            value="Send Message"
                          />
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
                <div className="details">
                  <h1>My Contact Details</h1>
                  <p>
                    leezahuor@gmail.com
                    <br />
                    +1-626-244-1789
                  </p>
                  <br />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
