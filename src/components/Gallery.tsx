import React, { useEffect, useState } from "react";
import { Project, updateProject, useProject } from "../store/portfolio";
import { Carousel, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import store from "../store/store";


export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = useProject(slug as string);
  const { gallery, loaded } = project || {};
  const [show, setShow] = React.useState<boolean>(!!gallery);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  
  useEffect(() => {
    if (!loaded && slug) {
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

  return (
    <Modal show={show} onHide={() => {
      setShow(false);
      navigate('/');
    }} >
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{project.description}</p>
        <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
          {project.gallery?.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={'/images/' + image.gal} alt={image.caption || "coming soon"} className="d-block w-100" />
            </Carousel.Item>
          ))}
        </Carousel>        
      </Modal.Body>
    </Modal>
  );
};

export default Gallery;
