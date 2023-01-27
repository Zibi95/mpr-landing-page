import googlePlay from '../../assets/googlePlay.png';
import leftArrow from '../../assets/right.png';
import page1 from '../../assets/page1.png';
import Footer from '../Footer.component';

const PageOne = ({ nextPage }) => {
  return (
    <>
      <main className="flex justify-around mt-24 flex-wrap">
        <article className="flex flex-col gap-5 w-[35%] flex-shrink-0">
          <p className="text-white md:text-2xl leading-relaxed ">
            Rozwijaj swoje pasje razem ze mną!
          </p>
          <a
            className="hover:-translate-y-2 hover:shadow-2xl  mt-10 max-w-[500px] transition-transform duration-300 delay-300 "
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/games?hl=pl&gl=US&pli=1"
          >
            <img src={googlePlay} alt="donwload button" />
          </a>
        </article>
        <article className="w-[25%] flex-shrink-0">
          <p className="text-white md:text-2xl leading-relaxed "> Hey</p>
        </article>
      </main>

      <div className=" left-[75%] absolute bottom-[15%]">
        <div className="flex items-center gap-10">
          <button
            onClick={nextPage}
            className="hover:translate-x-7 transition-transform"
          >
            <img src={leftArrow} alt="left arrow" />
          </button>
          <p className=" hidden xl:block text-white text-lg">
            Zobacz co potrafię!
          </p>
        </div>
      </div>
      <div>
        <img
          className="lg:w-[65%] transition-all absolute bottom-0 -z-10 left-[50%] -translate-x-[50%]"
          src={page1}
          alt="planeta"
        />
      </div>
      <Footer position="flex absolute flex-shrink bottom-[5%] gap-14 ml-10 mt-auto" />
    </>
  );
};

export default PageOne;
