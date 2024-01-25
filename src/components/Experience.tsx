import { Col, Row } from "react-bootstrap";
import { Project, useFilter, useFiltersArray, useProjectsArray } from "../store/portfolio";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ExperienceItem = ({ project }: { project: Project }) => {
  return (
    <Link
      title={project.title}
      to={'/gallery/' + project.slug}
    >
      <img
        src={'/images/' + project.mainImage.url}
        alt={project.mainImage.alt}
        className="border border-2 border-dark-subtle"
      />
    </Link>
  )
};

export const Experience = () => {
  const experience = useProjectsArray();
  const filters = useFiltersArray();
  const filter = useFilter(useParams().filter as string)
  const [activeFilter, setActiveFilter] = useState(filter || null);
  console.log("ACTIVE FILTER", activeFilter)

  useEffect(() => {
    if (filter) {
      setActiveFilter(filter)
    } else {
      setActiveFilter(null)
    }
  }, [filter])

  return (
    <section>
      <h3 className="text-center text-md-start mb-3">My Experience</h3>
      {/* {filters.length > 0 && (<span>Filter by:</span>)} */}
      <Row className="justify-content-evenly">
        {filters.map((f, index) => (
          <Col className="mb-4 flex-grow-0 text-nowrap" key={'filter' + index}>
            <Link
              to={'/' + (!activeFilter ? f.slug : '')}
              className={`text-decoration-none ${activeFilter?.slug === f.slug ? 'text-primary' : ''}`}
              title={activeFilter?.slug === f.slug ? 'Clear filter' : 'Click to filter'}
            >{f.title}</Link>
          </Col>
        ))}
      </Row>
      <Row>
        {experience.filter((exp) => {
          if (!activeFilter) return true;
          if (!exp.tags) return false;
        }).map((project, index) => (
          <Col
            key={project.slug + 'xp' + index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="mb-4"
          >
            <ExperienceItem project={project} />
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Experience;
