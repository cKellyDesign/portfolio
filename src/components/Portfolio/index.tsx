import React from 'react';
import { Store } from 'redux';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Header } from './../Header';
import { ConnectedAboutComponent as About, AboutProps } from './../About';
import './portfolio.scss';
import WorkGallery, { WorkGalleryProps } from '../WorkGallery';

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

    <WorkGallery {...(props.ownProps as WorkGalleryProps & RouteComponentProps)} />
  </>
);

const ConnectedPortfolio = connect(mapStateToProps)(Portfolio);

export default ConnectedPortfolio;
