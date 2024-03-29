import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import pup1 from "../assets/img/pup1.png";
import pup2 from "../assets/img/pup2.png";
import pup3 from "../assets/img/pup3.png";
import pup4 from "../assets/img/pup4.png";
import pup5 from "../assets/img/pup5.png";
import pup6 from "../assets/img/pup6.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Avlpet = () => {

  const projects = [
    {
      title: "Sunny",
      description: "Adorable Golden Retriever",
      imgUrl: pup1,
    },
    {
      title: "Whiskers the Cat",
      description: "Persian Kitten",
      imgUrl: pup2,
    },
    {
      title: "Rocky",
      description: "Fearless Rottweiler",
      imgUrl: pup3,
    },
    {
      title: "Luna",
      description: "Lovable Labrador",
      imgUrl: pup4,
    },
    {
      title: "Tango",
      description: "The Parrot",
      imgUrl: pup5,
    },
    {
      title: "Whiskerina",
      description: "The Cat",
      imgUrl: pup6,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Pets Available Now! 🐾🏠</h2>
                <p>I have always been enamored with the art of designing and developing web projects. With a keen eye for detail and a desire to innovate, I bring creativity and originality to each project I work on, resulting in a unique and impactful online presence.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
