import reducerRegistry from '@onaio/redux-reducer-registry';
import React from 'react';
import { Store } from 'redux';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import WorkReducer, {
  getWorkArray, 
  getProjectArray,
  fetchProjects,
  fetchWork,
  projectsModel,
  reducerName as WorkItemReducerName,
  WorkItem,
  workModel,
} from '../../store/ducks/work';

reducerRegistry.register(WorkItemReducerName, WorkReducer);

export interface WorkGalleryProps extends RouteComponentProps {
  fetchProjects: typeof fetchProjects,
  fetchWork: typeof fetchWork,
  projectsArray: WorkItem[];
  workArray: WorkItem[];
}

export const mapStateToProps = (state:Partial<Store>, ownProps: RouteComponentProps) => {
  const workArray = getWorkArray(state);
  const projectsArray = getProjectArray(state);

  return { projectsArray, workArray };
}

export const mapDispatchToProps = { fetchProjects, fetchWork };

export const WorkGalleryComponent = (props:WorkGalleryProps) => {
  const { fetchProjects, fetchWork, projectsArray, workArray } = props;
  if (!projectsArray) {
    fetchProjects(projectsModel);
  }

  if (!workArray) {
    fetchWork(workModel);
  }

  return (
    <>
      {workArray && (
        <Row id="work">
          <Col sm={12}><h2 className="workHeader">My Work</h2></Col>
          <Col md={{ size: 10, offset: 1}}>
            <div className="section-blurb" style={{ textAlign: 'center' }}>
              <p>For the past decade I have worked for various companies and organizations to build user-optimized web solutions.</p>
            </div>
          </Col>
        </Row>
      )}

      {projectsArray && (
        <Row id="projects"></Row>
      )}
    </>
  )
}

export const ConnectedWorkGallery = connect(mapStateToProps, mapDispatchToProps)(WorkGalleryComponent);

export default ConnectedWorkGallery;
