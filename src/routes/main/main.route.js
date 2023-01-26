import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import planeta from '../../assets/planetka.png';
import robot from '../../assets/robot.png';

const Main = () => {
  return (
    <>
      <div className=" -z-[1] absolute bottom-0 left-1/2 -translate-x-1/2 w-9/12">
        <img src={planeta} alt="planeta" />
        <img
          alt="robot"
          className="absolute bottom-[50%] left-1/2 -translate-x-1/2 "
          src={robot}
        />
      </div>
      <footer>
        <FontAwesomeIcon icon={faFacebook} size="lg" />
      </footer>
    </>
  );
};

export default Main;
