import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = ({ position }) => {
  return (
    <footer className={position}>
      <FontAwesomeIcon
        className="facebook"
        icon={faFacebook}
        size="3x"
        color="white"
      />
      <FontAwesomeIcon
        className="instagram"
        icon={faInstagram}
        size="3x"
        color="white"
      />
      <FontAwesomeIcon
        className="linkedin"
        icon={faLinkedin}
        size="3x"
        color="white"
      />
      <FontAwesomeIcon
        className="tikTok"
        icon={faTiktok}
        size="3x"
        color="white"
      />
    </footer>
  );
};

export default Footer;
