import telephone from '../../assets/page2-telephone.png';
import PlanetImage from '../PlanetImage.component';

import { motion } from 'framer-motion';

const PageThree = ({ prevPage }) => {
  return (
    <>
      <motion.main
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-around mt-24 h-[55vh]">
        <article className="flex flex-col gap-5 w-[40%] flex-shrink-0">
          <h2 className="text-2xl font-bold text-white lg:text-4xl">Co oferuję w zamian?</h2>
          <p className="leading-relaxed text-white lg:text-2xl ">
            Dzięki działaniom, które będziesz podejmował w aplikacji nasz przyjaciel robot przyznaje punkty, które możesz wymienić w naszym
            wewnętrznym sklepie, a co najważniejsze satysfakcję z pracy jaką włożysz, aby się rozwijać.
          </p>
        </article>
        <article className="w-[25%] flex-shrink-0">
          <img
            src={telephone}
            alt="telephone"
          />
        </article>
      </motion.main>
      <PlanetImage prevPage={prevPage} />
    </>
  );
};

export default PageThree;
