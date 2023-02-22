import { motion } from 'framer-motion';
//Images
import googlePlay from '../../assets/googlePlay.png';
import robot1 from '../../assets/machanie.gif';
// Components
import PlanetImage from '../PlanetImage.component';
import Footer from '../Footer.component';

const PageOne = ({ nextPage, direction }) => {
  console.log(direction);
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
            href="https://play.google.com/store/games?hl=pl&gl=US&pli=1">
            <img
              src={googlePlay}
              alt="donwload button"
            />
          </a>
          ;
        </article>
        <article className="w-[25%] flex-shrink-0">
          <p className="leading-relaxed text-white md:text-2xl "> Hey</p>
        </article>
      </motion.main>

      <PlanetImage
        nextPage={nextPage}
        direction={direction}
        robot={robot1}
      />

      <Footer position="flex absolute bottom-[5%] gap-14 ml-10" />
    </>
  );
};

export default PageOne;
