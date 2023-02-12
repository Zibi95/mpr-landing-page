import leftArrow from '../assets/left.png';
import rightArrow from '../assets/right.png';
import planeta from '../assets/planeta.png';

import { motion } from 'framer-motion';

const PlanetImage = ({ prevPage, nextPage, direction }) => {
  return (
    <div className="flex justify-center w-full]">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className=" flex items-center justify-center w-full gap-[50%] z-10 absolute bottom-[15%]">
        <button
          onClick={() => prevPage(-1)}
          className={`transition-transform hover:-translate-x-7 ${!prevPage && 'opacity-0 cursor-auto'}`}>
          <img
            className="w-16 justify-self-center xl:w-20"
            src={leftArrow}
            alt="left arrow"
          />
        </button>

        <button
          onClick={() => nextPage(1)}
          className={`transition-transform hover:translate-x-7 ${!nextPage && 'opacity-0 cursor-auto'}`}>
          <img
            className="w-16 justify-self-center xl:w-20"
            src={rightArrow}
            alt="right arrow"
          />
        </button>
      </motion.div>
      <motion.div
        animate={{ rotate: 0 }}
        initial={{ rotate: direction === -1 ? 180 : -180 }}
        transition={{ duration: 0.5 }}>
        <img
          src={planeta}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default PlanetImage;
