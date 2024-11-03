import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import chatwell from "../../Assets/Projects/chatwell.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatwell}
              isBlog={false}
              title="Chat Well"
              description="A mental health chatbot designed to offer personalized support and advice. Built using Rasa framework, this chatbot leverages Natural Language Understanding (NLU) and dialogue management to engage users empathetically. It provides a meaningful experience for users seeking guidance, enhancing my skills in NLP and Python."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio website built to showcase my projects, skills, and experience. Developed with React.js and CSS to provide a smooth and interactive user experience. Features include an organized display of projects, a blog section, and a responsive design that adapts well to different screen sizes."
             // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
              ghLink="https://github.com/NehaBajjuri/Neha_Portfolio"
              demoLink="https://bajjurineha.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             // imgPath={editor}
              isBlog={false}
              title="URL Shortener"
              description="A web application developed using Go that shortens lengthy URLs into concise, shareable links. This project strengthened my understanding of HTTP handling with Go’s http.Request and http.ResponseWriter, providing a fast and efficient user experience for managing and sharing URLs."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
