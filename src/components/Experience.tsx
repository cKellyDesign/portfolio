import { Col, Row } from "react-bootstrap";
import { Project, ProjectFilter, useFilter, useFiltersArray, useProjectsArray } from "../store/portfolio";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const ExperienceItem = ({ project }: { project: Project }) => {
  return (
    <Link
      title={project.title}
      to={'/gallery/' + project.slug}
    >
      <img
        src={'/images/' + project.mainImage?.url}
        alt={project.mainImage?.alt}
        className="border border-2 border-dark-subtle"
      />
    </Link>
  )
};

/**
 * Filter experience by tags
 */
export const filterExperience = (
  experience: Project[],
  filter: ProjectFilter): Project[] => experience.filter((exp) => {
    if (!filter) return true;
    if (!Array.isArray(exp.tags)) return false;
    for (let tag of exp.tags) {
      for (let f of filter.tags) {
        if (tag.toLowerCase().includes(f.toLowerCase())) return true;
      }
    }
    return false;
  });


export const Experience = () => {
  const { filter:pFilter, slug } = useParams();
  const experience = useProjectsArray();
  const filters = useFiltersArray();
  const filter = useFilter(pFilter as string)
  const [activeFilter, setActiveFilter] = useState(filter || null);
  
  useEffect(() => {
    if (slug) return;
    if (filter) {
      setActiveFilter(filter)
    } else {
      setActiveFilter(null)
    }
  }, [filter, slug]);

  return (
    <section>
      <h3 className="text-center text-md-start mb-3">My Experience</h3>
      {/* {filters.length > 0 && (<span>Filter by:</span>)} */}
      <Row className="justify-content-evenly">
        {filters.map((f, index) => (
          <Col className="mb-4 flex-grow-0 text-nowrap" key={'filter' + index}>
            <Link
              to={'/' + (activeFilter?.slug === f.slug ? '' : f.slug)}
              className={`text-decoration-none ${activeFilter?.slug === f.slug ? 'text-primary' : ''}`}
              title={activeFilter?.slug === f.slug ? 'Click to clear filter' : 'Click to filter'}
            >{f.title}</Link>
          </Col>
        ))}
      </Row>
      <Row className="mb-4">
        {(activeFilter ? filterExperience(experience, activeFilter) : experience).map((project, index) => (
          <Col
            key={project.slug + 'xp' + index}
            xs={12}
            sm={6}
            md={4}
            // lg={3}
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
