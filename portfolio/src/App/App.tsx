import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import profileImage from '../assets/me_2.jpg';
import './App.scss'

export const App = () => {
  const profilePic = (
    <Image src={profileImage} alt="an image of Conor Kelly outdoors, smiling, and wearing a white shirt" roundedCircle className="profilePic"/>
  )
  const LinkStack = ({className}: {className: string}) => (
    <Stack direction="horizontal" gap={3} className={`justify-content-center ${className}`}>
      <a href="https://www.linkedin.com/in/ckellydesign/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="mailto:ckellydesign.net@gmail.com" target="_blank">Email</a>
      <a href="https://github.com/cKellyDesign" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.accessi.tech/" target="_blank" rel="noopener noreferrer">AccessiTech</a>
    </Stack>
  );
  return (
    <Container>
      <Row >
        <Col>
          <header className="mb-md-5">
            <h1>Conor Kelly</h1>
            <LinkStack className="d-md-none" />
            <div className="d-md-none mb-5 mt-5">
              {profilePic}
            </div>
            <h2 className="mb-5 mb-md-2">
              <span className="d-none d-md-inline">Accessibility Consultant / Design Technologist / Technical Leader</span>
              <Stack gap={4} className="d-md-none" direction="vertical">
                <span>Accessibility Consultant</span>
                <span>Design Technologist</span>
                <span>Technical Leader</span>
              </Stack>
            </h2>
            <LinkStack className="d-none d-md-flex" />
          </header>
        </Col>
      </Row>

      <section id="about" className="mb-4">
        <Row>
          <Col>
            <h3>About Me</h3>
            <p>I am an accessibility consultant, design technologist, and technical leader with over 15 years of experience in web development, digital accessibility, and user experience design. I'm extremely passionate about making the web more accessible and inclusive for all users.</p>
          </Col>
          <Col className="d-none d-md-block">
            {profilePic}
          </Col>
        </Row>
      </section>

      <section>
        <Row>
          <Col>
              <h3>Experience</h3>
              <p>Coming soon...</p>
          </Col>
        </Row>
      </section>

      {/* 
      <Row>
        <Col>
          <section>
            <h3>Education</h3>
            <p>Coming soon...</p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col>
          <section>
            <h3>Projects</h3>
            <p>Coming soon...</p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col>
          <section>
            <h3>Skills</h3>
            <p>Coming soon...</p>
          </section>
        </Col>
      </Row>
      <Row>
        <Col>
          <section>
            <h3>Volunteer</h3>
            <p>Coming soon...</p>
          </section>
        </Col>
      </Row> */}
    </Container>
  )
}

export default App
