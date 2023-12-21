import { Row, Col, Stack} from 'react-bootstrap';
import { LinkStack } from './LinkStack';
import ProfilePic from './ProfilePic';

export const Header = () => {
  return (
      <Row >
        <Col>
          <header className="mb-md-5">
            <h1>Conor Kelly</h1>
            <LinkStack className="d-md-none" />
            <div className="d-md-none mb-5 mt-5">
              <ProfilePic />
            </div>
            <h2 className="mb-5 mb-md-2">
              <span className="d-none d-md-inline">Accessibility Consultant / Design Technologist / Technical Leader</span>
              <Stack gap={4} className="d-md-none" direction="vertical">
                <span>Accessibility Consultant</span>
                <span>Design Technologist</span>
                <span>Technical Leader</span>
              </Stack>
            </h2>
            <LinkStack className="d-none d-md-flex" />
          </header>
        </Col>
      </Row>
  );
}

