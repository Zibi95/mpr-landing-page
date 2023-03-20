import { motion } from 'framer-motion';
//Images
import googlePlay from '../../assets/googlePlay.png';
import robot1 from '../../assets/machanie.gif';
import video from '../../assets/promo.mp4'
import poster from '../../assets/splash.png'
// Components
import PlanetImage from '../PlanetImage.component';
import Footer from '../Footer.component';

const PageOne = ({ nextPage, direction }) => {
  return (
    <>
      <motion.main
        animate={{ opacity: 1, x: 0 }}
        initial={{ x: 1000, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-around mt-18  h-[55vh] mb-16">
        <article className="flex flex-col gap-5 w-[40%] flex-shrink-0">
          <h1 className="text-xl font-bold leading-relaxed text-white md:text-4xl">Rozwijaj swoje pasje razem ze mną!</h1>
          <a
            className="hover:-translate-y-2 hover:shadow-2xl  mt-10 max-w-[500px] transition-transform duration-300 delay-300 "
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=pl.mojprzyjacielrobot.mojprzyjacielrobot">
            <img
              src={googlePlay}
              alt="donwload button"
            />
          </a>
        </article>
        <article className=" flex-shrink-0 hidden lg:block">
          <video controls poster={poster} width={500}>
            <source src={video}/>

          </video>
        </article>
      </motion.main>

      <PlanetImage
        nextPage={nextPage}
        direction={direction}
        robot={robot1}
      />

      <Footer position="flex flex-col z-10 absolute bottom-[5%] gap-3 sm:gap-14 sm:flex-row ml-2" />
    </>
  );
};

export default PageOne;
