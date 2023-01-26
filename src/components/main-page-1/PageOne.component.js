import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTiktok,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import googlePlay from '../../assets/googlePlay.png';

const PageOne = () => {
  return (
    <>
      <main className="flex justify-center gap-[30%] mt-32">
        <div className="flex flex-col gap-5 w-[25%] ">
          <p className="text-white text-5xl leading-relaxed ">
            Rozwijaj swoje pasje razem ze mną
          </p>
          <button className="hover:-translate-y-2 transition-transform duration-300 ">
            <img src={googlePlay} alt="donwload button" />
          </button>
        </div>
        <div>
          <p className="text-white text-5xl leading-relaxed "> Hey</p>
        </div>
      </main>
      <footer className="flex absolute flex-shrink bottom-[5%] gap-14 ml-16 mt-auto w-[20%] scale-110">
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
    </>
  );
};

export default PageOne;
