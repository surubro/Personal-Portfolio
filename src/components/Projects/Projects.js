import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Netflix from "../../Assets/Projects/Netflix.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              title="Netflix Clone"
              description="Netflix Clone built using React.js, and Firebase. Fetches latest trending movies from TMDB API."
              link="https://github.com/AP-XD/Netflix-clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
