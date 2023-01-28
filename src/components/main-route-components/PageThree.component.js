import leftArrow from '../../assets/left.png';
import telephone from '../../assets/page2-telephone.png';
import page3 from '../../assets/page3.png';

import { motion } from 'framer-motion';

const PageThree = ({ prevPage }) => {
  return (
    <>
      <motion.main
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-around mt-24 flex-wrap"
      >
        <article className="flex flex-col gap-5 w-[40%] flex-shrink-0">
          <h2 className="text-white text-2xl lg:text-4xl font-bold">
            Co oferuję w zamian?
          </h2>
          <p className="text-white lg:text-2xl leading-relaxed ">
            Dzięki działaniom, które będziesz podejmował w aplikacji nasz
            przyjaciel robot przyznaje punkty, które możesz wymienić w naszym
            wewnętrznym sklepie, a co najważniejsze satysfakcję z pracy jaką
            włożysz, aby się rozwijać.
          </p>
        </article>
        <article className="w-[25%] flex-shrink-0">
          <img src={telephone} alt="telephone" />
        </article>
      </motion.main>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className=" right-[75%] z-10 absolute bottom-[15%]"
      >
        <button
          onClick={() => prevPage(-1)}
          className=" hover:-translate-x-7 transition-transform"
        >
          <img src={leftArrow} alt="left arrow" />
        </button>
      </motion.div>
      <motion.div
        animate={{ rotate: 0, y: 350 }}
        initial={{ rotate: -90, y: 350 }}
        transition={{ duration: 0.2 }}
      >
        <img
          className=" lg:w-[65%] transition-all absolute bottom-0 -z-10 left-[50%] -translate-x-[50%]"
          src={page3}
          alt="planeta"
        />
      </motion.div>
    </>
  );
};

export default PageThree;
