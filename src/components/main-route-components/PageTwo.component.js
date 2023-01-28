import leftArrow from '../../assets/left.png';
import rightArrow from '../../assets/right.png';
import page2 from '../../assets/page2.png';
import telephone from '../../assets/page2-telephone.png';

import { motion } from 'framer-motion';

const PageTwo = ({ prevPage, nextPage, direction }) => {
  return (
    <>
      <motion.main
        animate={{ opacity: 1, x: 0 }}
        initial={{ x: direction === 1 ? -1000 : 1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-around mt-24 flex-wrap"
      >
        <article className="flex flex-col gap-5 w-[40%] flex-shrink-0">
          <h2 className="text-white text-2xl lg:text-4xl font-bold">
            Co potrafię?
          </h2>
          <p className="text-white lg:text-2xl leading-relaxed ">
            "Mój przyjaciel robot" to aplikacja, która zachęci Cię do
            przeznaczenia wolnego czasu na rozwój nowych postanowień lub
            własnych zainteresowań.
          </p>
        </article>
        <article className="w-[25%] flex-shrink-0">
          <img src={telephone} alt="telephone" />
        </article>
      </motion.main>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className=" flex items-center justify-center w-full gap-[50%] z-10 absolute bottom-[15%]"
      >
        <button
          onClick={() => prevPage(-1)}
          className="hover:-translate-x-7 transition-transform "
        >
          <img src={leftArrow} alt="left arrow" />
        </button>
        <button
          onClick={() => nextPage(1)}
          className="hover:translate-x-7 transition-transform"
        >
          <img src={rightArrow} alt="right arrow" />
        </button>
      </motion.div>

      <motion.div
        animate={{ rotate: 0, y: 350 }}
        initial={{ rotate: direction === -1 ? 90 : -90, y: 350 }}
        transition={{ duration: 0.2 }}
      >
        <img
          className=" lg:w-[65%] transition-all absolute bottom-0  left-[50%] -translate-x-[50%]"
          src={page2}
          alt="planeta"
        />
      </motion.div>
    </>
  );
};

export default PageTwo;
