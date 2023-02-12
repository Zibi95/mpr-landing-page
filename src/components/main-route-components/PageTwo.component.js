import telephone from '../../assets/page2-telephone.png';
import PlanetImage from '../PlanetImage.component';

import { motion } from 'framer-motion';

const PageTwo = ({ prevPage, nextPage, direction }) => {
  return (
    <>
      <motion.main
        animate={{ opacity: 1, x: 0 }}
        initial={{ x: direction === 1 ? -1000 : 1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-around mt-24 h-[55vh]">
        <article className="flex flex-col gap-5 w-[40%] flex-shrink-0">
          <h2 className="text-2xl font-bold text-white lg:text-4xl">Co potrafię?</h2>
          <p className="leading-relaxed text-white lg:text-2xl ">
            "Mój przyjaciel robot" to aplikacja, która zachęci Cię do przeznaczenia wolnego czasu na rozwój nowych postanowień lub własnych
            zainteresowań.
          </p>
        </article>
        <article className="w-[25%] flex-shrink-0">
          <img
            src={telephone}
            alt="telephone"
          />
        </article>
      </motion.main>
      <PlanetImage
        prevPage={prevPage}
        nextPage={nextPage}
        direction={direction}
      />
    </>
  );
};

export default PageTwo;
