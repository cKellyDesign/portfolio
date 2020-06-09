import React from 'react';
import { Store } from 'redux';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Header } from './../Header';
import { ConnectedAboutComponent as About, AboutProps } from './../About';
import './portfolio.scss';

interface PortfolioProps {
  state: Partial<Store>;
  ownProps:RouteComponentProps;
}

const mapStateToProps = (state:Partial<Store>, ownProps: {className:string} & RouteComponentProps) => {
  return {
    state,
    ownProps,
  }
}

export const Portfolio = (props:PortfolioProps) => (
  <>
    <Header />

    <About {...(props.ownProps as AboutProps & RouteComponentProps)} />

    <Row id="work">
      <Col sm={12}><h2 className="workHeader">My Work</h2></Col>
      <Col md={{ size: 10, offset: 1}}>
        <div className="section-blurb" style={{ textAlign: 'center' }}>
          <p>For the past decade I have worked for various companies and organizations to build user-optimized web solutions.</p>
        </div>
      </Col>
    </Row>

    <Row id="projects"></Row>
  </>
);

const ConnectedPortfolio = connect(mapStateToProps)(Portfolio);

export default ConnectedPortfolio;
