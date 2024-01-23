import { Image } from 'react-bootstrap';
import profileImage from '../assets/me_2.jpg';

export const ProfilePic = () => (
  <Image
    src={profileImage}
    alt="an image of Conor Kelly outdoors, smiling, and wearing a white shirt"
    roundedCircle
    className="profilePic mb-4"
  />
);

export default ProfilePic;
