import { Container } from "react-bootstrap";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import './App.scss'
import { useEffect } from "react";
import store from "../store/store";
import { fetchInitialState, fetchProject, getProjectsArray } from "../store/portfolio";
import Gallery from "../components/Gallery";

export const App = () => {

  useEffect(() => {
    store.dispatch(fetchInitialState())
      .then(() => {
        const projects = getProjectsArray(store.getState());
        for (let project of projects) {
          store.dispatch(fetchProject(project.slug));
        }
      });
  }, []);

  return (
    <Container>
      <Header />
      <main id="main">
        <About />

        <Experience />

        <Gallery />
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
      </main>
    </Container>
  )
}

export default App
