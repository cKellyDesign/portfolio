import React, { useEffect } from "react";
import { Project, updateProject, useProject } from "../store/portfolio";
import { Carousel, Offcanvas } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import store from "../store/store";


export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = useProject(slug as string);
  const { gallery, loaded } = project || {};
  const [show, setShow] = React.useState<boolean>(!!gallery);
  
  useEffect(() => {
    if (!loaded) {
      fetch(`/data/${slug}.json`)
        .then((response) => response.json() as Promise<Project>)
        .then((loadedProject) => {
          store.dispatch(updateProject(loadedProject));
          setShow(true);
        })
        .catch((error) => {
          console.error(error);
          navigate('/');
        });
    }
  }, [loaded, slug, navigate]);
  
  
  if (!gallery) {
    return null
  }

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
    <Offcanvas show={show} onHide={() => {
      setShow(false);
      navigate('/');
    }} >
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
