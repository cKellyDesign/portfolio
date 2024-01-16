import React, { useEffect } from "react";
import { Project } from "../store/portfolio";
import { Carousel, Offcanvas } from "react-bootstrap";
import { useLoaderData, useNavigate } from "react-router-dom";


export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const { project } = useLoaderData() as { project: Project };

  useEffect(() => {
    if (!project) {
      navigate('/');
    }
  }, [project, navigate]);
  
  if (!project) {
    return null
  }
  // const [activeProject, setActiveProject] = React.useState<Project>(project);
  // const [activeIndex, setActiveIndex] = React.useState<number>(0);
  // const [isLoading, setIsLoading] = React.useState<boolean>(typeof project.gallery === "undefined");

  // React.useEffect(() => {
  //   if (!project.gallery) {
  //     fetch(`/data/${project.slug}.json}`)
  //       .then((response) => response.json() as Promise<Project>)
  //       .then((loadedProject) => {
  //         store.dispatch(updateProject(loadedProject));
  //       })
  //       .catch((error) => console.error(error));
  //   }
  // }, []);

  // React.useEffect(() => {
  //   if (project.gallery) {
  //     setActiveProject(project);
  //     setIsLoading(false);
  //   }
  // }, [project]);

  return (
    <Offcanvas show={true} >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{project.title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>

        <Carousel>
          {project.gallery?.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image.gal} alt={image.caption || "coming soon"} className="d-block w-100" />
              <Carousel.Caption>
                <h3>{image.caption || "coming soon"}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <p>{project.description}</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Gallery;
