import { motion } from 'framer-motion';

const AppInfo = ({ title, description, image, direction = 1 }) => {
  return (
    <motion.main
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: direction === 1 ? -1000 : 1000, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap justify-around mt-18 h-[55vh] mb-16">
      <article className="flex flex-col gap-5 w-[50%] sm:w-[40%] flex-shrink-0">
        <h2 className="text-2xl font-bold text-white lg:text-4xl">{title}</h2>
        <p className="text-sm leading-relaxed text-white lg:text-2xl ">{description}</p>
      </article>
      <article className="w-[25%] flex-shrink-0">
        <img
          src={image}
          alt="telephone"
        />
      </article>
    </motion.main>
  );
};

export default AppInfo;
