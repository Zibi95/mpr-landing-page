import leftArrow from '../../assets/left.png';
import rightArrow from '../../assets/right.png';

import telephone from '../../assets/page2-telephone.png';

const PageTwo = () => {
  return (
    <>
      <main className="flex justify-around mt-24 flex-wrap">
        <article className="flex flex-col gap-5 w-[25%] flex-shrink-0">
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
      </main>

      <div className=" flex items-center justify-center w-full gap-[50%]   absolute  bottom-[15%]">
        <button className="hover:-translate-x-7 transition-transform ">
          <img src={leftArrow} alt="left arrow" />
        </button>
        <button className="hover:translate-x-7 transition-transform">
          <img src={rightArrow} alt="left arrow" />
        </button>
      </div>
    </>
  );
};

export default PageTwo;
