import { Col, Row } from "react-bootstrap";
import { pitch, highlights } from "../assets/data/about.json";
import ProfilePic from "./ProfilePic";

// export interface AboutSection {
//   id: string,
//   header: string,
//   blurb: string[]
// }

export const About = () => {
  // const { id, header, blurb } = aboutSection as AboutSection;
  return (
    <section id="about" className="mb-4">
      <Row>
        <Col>
          <h3 className="text-center text-md-start" >About Me</h3>
          {pitch.map((paragraph, index) =>
            <p key={'about-blurb' + index}>{paragraph}</p>
          )}
        </Col>
        <Col className="d-none d-md-block">
          <ProfilePic />
        </Col>
      </Row>
      <Row className="flex-sm-column flex-md-row">
        {highlights.map((highlight, index) =>
          <Col key={'about-highlight' + index}>
            <h4>{highlight.title}</h4>
            <p>{highlight.description}</p>
          </Col>
        )}
      </Row>
    </section>
  );
}

export default About;
