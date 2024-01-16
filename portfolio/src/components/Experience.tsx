import { Col, Row } from "react-bootstrap";
import { useProjectsArray } from "../store/portfolio";

export const Experience = () => {
  const experience = useProjectsArray();
  console.log('experience', experience);
  return (
    <section>
      <h3>Experience</h3>
      <Row>
        {experience.map((project, index) => (
          <Col key={project.slug + 'xp' + index}>
            <h4>{project.title}</h4>
            <img src={'/images/' + project.mainImage.url} alt={project.mainImage.alt} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Experience;
