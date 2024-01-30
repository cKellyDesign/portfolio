import React, { useEffect, useState } from "react";
import { useProject } from "../store/portfolio";
import { Carousel, Modal } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";


export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = useProject(slug as string);
  const [gallery, setGallery] = useState(project?.gallery || null);
  const [show, setShow] = React.useState<boolean>(!!gallery);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  
  useEffect(() => {
    if (project && project.gallery) {
      setGallery(project.gallery);
      setShow(true);
    }
  }, [project]);
  
  if (!gallery || !project) {
    return null
  }

  return (
    <Modal aria-label="Gallery modal overlay" show={show} onHide={() => {
      setShow(false);
      navigate(-1);
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
