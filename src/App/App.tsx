import React from 'react';
import { createBrowserHistory } from 'history'
import { Col, Container, Row } from 'reactstrap';
import './App.scss';
import { Switch, Route } from 'react-router';

export const history = createBrowserHistory();

export const App = () => {

  return (
    <Container>
      <Row>
        <Col>
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
