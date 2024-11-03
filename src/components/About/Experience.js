import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function ExperienceCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I had the opportunity to intern at <span className="purple">PayPal </span>
            where I focused on automating the promotion process for <span className="purple"> C++ RPM Packages. </span>
            <br />
            This experience involved transforming a manual process into a streamlined CI/CD pipeline, significantly improving efficiency and reducing deployment times.
            <br />
            I utilized tools such as Go, Argo Workflows, and Jenkins to build a robust microservice that validated and promoted packages, ensuring they met stringent security and compliance standards before deployment.
            <br/>
            This role not only enhanced my coding skills but also provided me with valuable insights into the Software Development Life Cycle (SDLC) and best practices in DevOps.
            Apart from technical knowledge, I have also improved some important key skills like
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Collaboration
            </li>
            <li className="about-activity">
              <ImPointRight /> Presentation
            </li>
            <li className="about-activity">
              <ImPointRight /> Effective Time Management
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
    
  );
}

export default ExperienceCard;
