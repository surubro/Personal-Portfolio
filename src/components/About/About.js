import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Languages from "./Languages";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Tools from "./Tools";
import CP from "./CP";
import Aboutcard from "./AboutCard";
import devImg from "../../Assets/Developer.svg";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="blue"> ME </strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <Tilt>
              <img src={devImg} alt="about" className="img-fluid" />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="blue">Basic Skills & Knowledge</strong>
        </h1>
        <br />
        <h2>Languages</h2>
        <Languages />
        <br />
        <h2>Frontend</h2>
        <Frontend />
        <br />
        <h2>Backend</h2>
        <Backend />
        <br />
        <h2>Competitive Programming</h2>
        <CP />
        <br />
        <h2>Tools</h2>
        <Tools />
        <br />
      </Container>
    </Container>
  );
}

export default About;
