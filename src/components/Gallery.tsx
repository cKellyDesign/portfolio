import React, { useEffect, useState } from "react";
import { useProject } from "../store/portfolio";
import { Carousel, Col, Container, Modal, Row } from "react-bootstrap";
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
    <Modal
      size="xl"
      aria-label="Gallery modal overlay"
      show={show}
      onHide={() => {
        setShow(false);
        navigate(-1);
        setIndex(0);
      }
    } >
      <Modal.Body style={{ height: "calc(100vh - 56px)", overflow: "hidden" }}>
        <Container style={{ height: "100%" }}>
          <Row style={{ height: "100%" }}>
            <Col sm={12} md={4}>
              <h4>{project.title}</h4>
              {project.bullets?.length ? (
                <ul style={{ marginLeft: 0, paddingLeft: 0, marginBottom: '1.5rem' }}>
                  {project.bullets.map((bullet, index) => (
                    <li
                      key={project.slug + index + '-bullet'}
                      style={{ marginBottom: '0.5rem', lineHeight: 1.25 }}
                    >{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p>{project.description}</p>
              )}
              {project.tags?.length && (<h5>Key Skills</h5>)}
              {project.tags?.map((tag, index) => (
                <span key={project.slug + index + '-skill'} className="badge bg-dark me-1">{tag}</span>
              ))}
            </Col>
            <Col sm={12} md={8} style={{ height: "100%" }} >
              <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" style={{ height: "100%" }}>
                {project.gallery?.map((image, index) => (
                  <Carousel.Item key={index}>
                    <a href={'/images/' + (image.fullRes || image.gal)} target="_blank" rel="noreferrer">
                      <img src={'/images/' + image.gal} alt={image.caption || "coming soon"} className="d-block w-100" />
                    </a>
                  </Carousel.Item>
                ))}
              </Carousel>  
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default Gallery;
