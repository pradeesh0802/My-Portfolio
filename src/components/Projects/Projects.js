import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import form from "../../Assets/Projects/form.png";
import suicide from "../../Assets/Projects/suicide.png";
import todo from "../../Assets/Projects/Todo.png";

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
              imgPath={form}
              isBlog={false}
              title="Form Validator"
              description="A form validator is a tool used in web development to ensure that data submitted through a form meets specific criteria or rules before it is processed or stored. It typically checks for things like required fields being filled out, correct formatting of email addresses or phone numbers, and valid input types (e.g., numbers vs. text)."
              ghLink="https://github.com/pradeesh0802/Form"
              demoLink="https://formvalidationpp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo"
              description="A to-do app helps you organize tasks, set deadlines, and stay productive. It's like a digital checklist where you can create, prioritize, and track your tasks. These apps often remind you of upcoming deadlines and let you share tasks with others, making teamwork easier. They sync across devices, so you can access your lists anywhere."
              ghLink="https://github.com/pradeesh0802/TODO"
              demoLink="https://todolistpp.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
