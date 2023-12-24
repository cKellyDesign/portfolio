import { Col, Row } from "react-bootstrap";
import { aboutSection } from "../assets/data/model";
import ProfilePic from "./ProfilePic";

export interface AboutSection {
  id: string,
  header: string,
  blurb: string[]
}

export const About = () => {
  const { id, header, blurb } = aboutSection as AboutSection;
  return (
    <section id={id} className="mb-4">
      <Row>
        <Col>
          <h3>{header}</h3>
          {blurb.map((paragraph, index) =>
            <p key={'about-blurb' + index}>{paragraph}</p>
          )}
        </Col>
        <Col className="d-none d-md-block">
          <ProfilePic />
        </Col>
      </Row>
    </section>
  );
}

export default About;
