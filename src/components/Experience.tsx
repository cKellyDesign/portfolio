import { Col, Row } from "react-bootstrap";
import { useProjectsArray } from "../store/portfolio";
import { useNavigate } from "react-router-dom";

export const Experience = () => {
  const experience = useProjectsArray();
  const navigate = useNavigate();
  return (
    <section>
      <h3 className="text-center text-md-start">My Experience</h3>
      {/* todo: add filter buttons here */}
      <Row>
        {experience.map((project, index) => (
          <Col
            key={project.slug + 'xp' + index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4"
          >
            <a
              title={project.title}
              href={'/' + project.slug}
              onClick={(event) => {
                event.preventDefault();
                navigate('/' + project.slug)
              }}
            >
              <img
                src={'/images/' + project.mainImage.url}
                alt={project.mainImage.alt}
                className="border border-2 border-dark-subtle"
              />
            </a>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Experience;
