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
      <a rel='noreferrer' href="https://www.facebook.com/Key-Up-107801688872573/" target='_blank'>
        <FontAwesomeIcon
          className="facebook"
          icon={faFacebook}
          size="2x"
          color="white"
        />
      </a>
      <a rel='noreferrer' href="https://instagram.com/keyup_official?igshid=YmMyMTA2M2Y=" target='_blank'>
        <FontAwesomeIcon
          className="instagram"
          icon={faInstagram}
          size="2x"
          color="white"
        />
      </a>
      <a rel='noreferrer' href="https://www.linkedin.com/in/key-up-03a47a269/" target='_blank'>
        <FontAwesomeIcon
          className="linkedin"
          icon={faLinkedin}
          size="2x"
          color="white"
        />
      </a>
      <a rel='noreferrer' href="https://www.tiktok.com/@key__up?_t=8ZY5gxh2rjB&_r=1" target='_blank'>
        <FontAwesomeIcon
          className="tikTok"
          icon={faTiktok}
          size="2x"
          color="white"
        />
      </a>
    </footer>
  );
};

export default Footer;
