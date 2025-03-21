import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Neha Bajjuri </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently an undergrad pursuing from GNITS Hyderabad
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
           I'm a passionate and driven technology enthusiast with a strong foundation in programming and software development. 
            <br/>
            I hold expertise in languages such as C++, Java, and GO and have hands-on experience with modern tools and technologies including Docker, Jenkins, and Argo Workflow templates. 
          

            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Strumming Ukulele
            </li>
            <li className="about-activity">
              <ImPointRight /> Clicking Random Pictures
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
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

export default AboutCard;
