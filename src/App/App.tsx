import React from 'react';
import { createBrowserHistory } from 'history'
import { Col, Container, Row } from 'reactstrap';
import { Switch, Route } from 'react-router';
import { Header } from './../components/Header';
import './App.scss';

export const history = createBrowserHistory();

export const App = () => {

  return (
    <Container>
      <Row>
        <Col>
          <Header />
          <main className="portfolio">
            <Switch>
              <Route
                exact={false}
                path={"/"}
                render={() => <h1 className="hello-world">Hello World</h1>} 
              />
            </Switch>
          </main>
          
        </Col>
      </Row>
    </Container>
  )
}
