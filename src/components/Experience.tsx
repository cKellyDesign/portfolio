import { Col, Row } from "react-bootstrap";
import { useFiltersArray, useProjectsArray } from "../store/portfolio";
import { Link, useNavigate } from "react-router-dom";

export const Experience = () => {
  const experience = useProjectsArray();
  const filters = useFiltersArray();
  const navigate = useNavigate();
  return (
    <section>
      <h3 className="text-center text-md-start mb-3">My Experience</h3>
      {/* {filters.length > 0 && (<span>Filter by:</span>)} */}
      <Row className="justify-content-evenly">
        {filters.map((filter, index) => (
          <Col className="mb-4 flex-grow-0 text-nowrap" key={'filter' + index}>
            <Link
              to={'/' + filter.slug}
              className="text-decoration-none"
            >{filter.title}</Link>
          </Col>
        ))}
      </Row>
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
              href={'/gallery/' + project.slug}
              onClick={(event) => {
                event.preventDefault();
                navigate('/gallery/' + project.slug)
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
