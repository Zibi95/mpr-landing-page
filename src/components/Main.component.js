import leftArrow from '../assets/left.png';
import rightArrow from '../assets/right.png';
import planeta from '../assets/planeta.png';

import { motion } from 'framer-motion';

const Main = ({ prevPage, nextPage, direction }) => {
  return (
    <div className="flex justify-center w-full">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className=" flex items-center justify-center w-full gap-[50%] z-10 absolute bottom-[15%]">
        <button
          onClick={() => prevPage(-1)}
          className="transition-transform hover:-translate-x-7 ">
          <img
            src={leftArrow}
            alt="left arrow"
          />
        </button>
        <button
          onClick={() => nextPage(1)}
          className="transition-transform hover:translate-x-7">
          <img
            src={rightArrow}
            alt="right arrow"
          />
        </button>
      </motion.div>
      <motion.div
        animate={{ rotate: 0 }}
        initial={{ rotate: direction === -1 ? 90 : -90, y: 100 }}
        transition={{ duration: 0.2 }}>
        <img
          className="translate-y-16 sm:-translate-y-10"
          src={planeta}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Main;
