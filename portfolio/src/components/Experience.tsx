import { Col, Row } from "react-bootstrap";
import { useProjectsArray } from "../store/portfolio";

export const Experience = () => {
  const experience = useProjectsArray();
  return (
    <section>
      <Row>
        <Col>
          <h3>Experience</h3>
          <ul>
            {experience.map((project, index) => (
              <li key={project.slug + 'xp' + index}>
                <h4>{project.title}</h4>
                <img src={'/images/' + project.mainImage.url} alt={project.mainImage.alt} />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </section>
  );
}

export default Experience;
