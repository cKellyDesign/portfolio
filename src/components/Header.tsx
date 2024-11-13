import { Row, Col } from 'react-bootstrap';
import { LinkStack } from './LinkStack';
import ProfilePic from './ProfilePic';

export const Header = () => {
  return (
      <Row >
        <Col>
          <header className="mb-md-5">
            <h1>Conor Kelly</h1>
            <LinkStack className="d-md-none" />
            <h2 className="tagline">
              <span >Creating Accessible Websites to Drive Impact</span>
            </h2>
            <div className="d-md-none mb-5 mt-5">
              <ProfilePic />
            </div>
            <LinkStack className="d-none d-md-flex" />
            {/* <p className='intro_blurb'>I provide tailored web solutions that elevate digital experiences for organizations, ensuring they are robust, inclusive, and user-friendly.</p> */}
          </header>
        </Col>
      </Row>
  );
}

