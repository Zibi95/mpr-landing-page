import googlePlay from '../../assets/googlePlay.png';
import Footer from '../Footer.component';

const PageOne = () => {
  return (
    <>
      <main className="flex justify-around mt-24">
        <div className="flex flex-col gap-5 w-[25%] ">
          <p className="text-white md:text-2xl leading-relaxed ">
            Rozwijaj swoje pasje razem ze mną!
          </p>
          <button className="hover:-translate-y-2 hover:shadow-2xl self-center mt-10 max-w-[300px] transition-transform duration-300 ">
            <img src={googlePlay} alt="donwload button" />
          </button>
        </div>
        <div className="w-[25%] ">
          <p className="text-white md:text-2xl leading-relaxed "> Hey</p>
        </div>
      </main>
      <Footer position="flex absolute flex-shrink bottom-[5%] gap-14 ml-10 mt-auto" />
    </>
  );
};

export default PageOne;
