import { Col, Container, Row } from "react-bootstrap";
import './App.scss'
import { Header } from "../components/Header";
import ProfilePic from "../components/ProfilePic";

export const App = () => {

  return (
    <Container>
      <Header />

      <section id="about" className="mb-4">
        <Row>
          <Col>
            <h3>About Me</h3>
            <p>I am an accessibility consultant, design technologist, and technical leader with over 15 years of experience in web development, digital accessibility, and user experience design. I'm extremely passionate about making the web more accessible and inclusive for all users.</p>
          </Col>
          <Col className="d-none d-md-block">
            <ProfilePic />
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
