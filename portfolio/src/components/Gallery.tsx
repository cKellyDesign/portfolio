import { Project, updateProject } from "../store/portfolio";
import { Offcanvas } from "react-bootstrap";

export interface GalleryProps {
  project: Project;
  show: boolean;
  isLoading: boolean;
}

import React from "react";
import { Carousel } from "react-bootstrap";
import store from "../store/store";

const Gallery: React.FC<GalleryProps> = ({ project, show }) => {
  const [activeProject, setActiveProject] = React.useState<Project>(project);
  // const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(typeof project.gallery === "undefined");

  React.useEffect(() => {
    if (!project.gallery) {
      fetch(`/data/${project.slug}.json}`)
        .then((response) => response.json() as Promise<Project>)
        .then((loadedProject) => {
          store.dispatch(updateProject(loadedProject));
        })
        .catch((error) => console.error(error));
    }
  }, []);

  React.useEffect(() => {
    if (project.gallery) {
      setActiveProject(project);
      setIsLoading(false);
    }
  }, [project]);

  return (
    <Offcanvas show={show} >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>{activeProject.title}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {isLoading && !activeProject.gallery && <p>Loading...</p>}
        <Carousel>
          {activeProject.gallery?.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image.gal} alt={image.caption || "coming soon"} className="d-block w-100" />
              <Carousel.Caption>
                <h3>{image.caption || "coming soon"}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <p>{activeProject.description}</p>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Gallery;
