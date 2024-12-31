import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import TicTacToe from "../../Assets/Projects/Tic-Tac-Toe.png";
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
              imgPath={TicTacToe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="Developed a classic Tic-Tac-Toe game in React. Created an interactive and user-friendly game with dynamic rendering and state management. Implemented features such as player turns, win conditions, a reset button, and a history tracker to enhance the user experience and provide replayability."
              ghLink="https://github.com/pradeesh0802/Tic-Tac-Toe"
              demoLink="https://tic-tac-toe-8l49.onrender.com/"
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
