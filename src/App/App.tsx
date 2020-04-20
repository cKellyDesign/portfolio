import React from 'react';
import { createBrowserHistory } from 'history'
import { Col, Container, Row } from 'reactstrap';
import { Switch, Route } from 'react-router';
import './App.scss';
import Portfolio from '../components/Portfolio';

export const history = createBrowserHistory();

export const App = () => {

  return (
    <Container>
      <main className="portfolio">
        <Switch>
          <Route
            exact={false}
            path={"/"}
            render={(routeProps) =>
              <Portfolio className="portfolio" {...routeProps} />
            } 
          />
        </Switch>
      </main>
    </Container>
  )
}
