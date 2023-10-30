import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
// import ProjectCard from "../ProjectCard/ProjectCard";
import Fridge from "../assets/fridge-backend.png";
import DonutApp from "../assets/donut-order-app.png";
import EventsWebpage from "../assets/events-webpage.png";
import "./index.css";

const Projects = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <div className="project-bx">
              <h2>My Projects</h2>
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card" className="project-card">
                    <img src={Fridge} class="card-img-top" alt="fridge" />
                    <div class="card-body">
                      <h5 class="card-title">Inventory Tracking Application</h5>
                      <h6>[Python]</h6>
                      <p class="card-text">
                        A food tracking application that organizes perishables
                        by expiration date with the goal to help prevent food
                        waste and encourage explorative cooking at home.
                      </p>
                    </div>
                    <div class="button-container">
                      <button
                        className="button-color-2"
                        role="link"
                        onClick={() =>
                          openInNewTab("https://github.com/amandate/fridge")
                        }
                      >
                        Code
                      </button>
                      <button
                        className="button-color-2"
                        role="link"
                        onClick={() => openInNewTab("")}
                      >
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" className="project-card">
                    <img src={DonutApp} class="card-img-top" alt="donut-app" />
                    <div class="card-body">
                      <h5 class="card-title">
                        Donut Shop Food Ordering Application
                      </h5>
                      <h6>[ReactJS, CSS, Firebase]</h6>
                      <p class="card-text">
                        A web application for users to order donuts from a local
                        donut shop. Implemented an order submission form that's
                        integrated and configured with Firebase.
                      </p>
                    </div>
                    <div class="button-container">
                      <button
                        className="button-color-2"
                        role="link"
                        onClick={() =>
                          openInNewTab(
                            "https://github.com/leezahuor/donut-order-app"
                          )
                        }
                      >
                        Code
                      </button>
                      <button
                        className="button-color-2"
                        role="link"
                        onClick={() => openInNewTab("")}
                      >
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card" className="project-card">
                    <img
                      src={EventsWebpage}
                      class="card-img-top"
                      alt="fridge"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Event Manager Web Application</h5>
                      <h6>[ReactJS, CSS]</h6>
                      <p class="card-text">
                        A multi-page web application that allows users to create
                        or log in to an account and interact with a list of
                        events. Utilizes routing to navigate between pages and
                        implements authentication to limit creation, deletion,
                        and editing of events to logged in users.
                      </p>
                    </div>
                    <div class="button-container">
                      <button
                        className="button-color-2"
                        role="link"
                        onClick={() =>
                          openInNewTab(
                            "https://github.com/leezahuor/events-webpage"
                          )
                        }
                      >
                        Code
                      </button>
                      <button
                        className="button-color-2"
                        role="link"
                        onClick={() => openInNewTab("")}
                      >
                        Demo
                      </button>
                    </div>
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

export default Projects;
