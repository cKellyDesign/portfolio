import reducerRegistry from '@onaio/redux-reducer-registry';
import React from 'react';
import { Store } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Row, Col } from 'reactstrap';

import AboutReducer, {
  aboutModel,
  reducerName as AboutReducerName,
  getAboutByKey,
  About,
  fetchAbout,
} from './../../store/ducks/about';

import me from './../../images/me.jpg';

// register the about store
reducerRegistry.register(AboutReducerName, AboutReducer);

// interface to describe props for connected About component
export interface AboutProps extends RouteComponentProps {
  about:About | null;
  fetchAbout: typeof fetchAbout;
}

const mapStateToProps = (state:Partial<Store>, ownProps: AboutProps & RouteComponentProps):AboutProps => {
  const about:About|null = getAboutByKey(state, 'general');
  return {
    ...ownProps,
    about,
  }
};

const mapDispatchToProps = { fetchAbout: fetchAbout };

export const AboutComponent = (props:AboutProps) => {
  if (!props.about) {
    // mimic async data fetching
    props.fetchAbout(aboutModel);
    return null;
  }

  const { pitch } = props.about;

  return (
    <>
      <Row id="about-me">
        <Col sm={12}>
          <div id="mPhoto" className="photo">
            <img src={me} />
          </div>
        </Col>
        <Col sm={12} md={6}>
          <p id="pitch">{pitch}</p>
        </Col>
        <Col md={6}>
          <div id="dPhoto" className="photo">
            <img src={me} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export const ConnectedAboutComponent = connect(mapStateToProps, mapDispatchToProps)(AboutComponent);

export default ConnectedAboutComponent;
