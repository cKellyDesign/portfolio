import React from 'react';
import { Switch, Route, RouteProps, RouteComponentProps } from 'react-router';
import { createBrowserHistory } from 'history'
import { Container } from 'reactstrap';
import Portfolio from '../components/Portfolio';
import './App.scss';

export const history = createBrowserHistory();

export const App = () => {

  return (
    <Container>
      <main className="portfolio">
        <Switch>
          <Route
            exact={false}
            path={"/"}
            render={(routeProps:RouteProps) =>
              <Portfolio className="portfolio" {...routeProps as RouteComponentProps} />
            } 
          />
        </Switch>
      </main>
    </Container>
  )
}
