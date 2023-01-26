import googlePlay from '../../assets/googlePlay.png';
import Footer from '../Footer.component';

const PageOne = () => {
  return (
    <>
      <main className="flex justify-center gap-[30%] mt-32">
        <div className="flex flex-col gap-5 w-[25%] ">
          <p className="text-white text-5xl leading-relaxed ">
            Rozwijaj swoje pasje razem ze mną
          </p>
          <button className="hover:-translate-y-2 transition-transform duration-300 ">
            <img src={googlePlay} alt="donwload button" />
          </button>
        </div>
        <div>
          <p className="text-white text-5xl leading-relaxed "> Hey</p>
        </div>
      </main>
      <Footer position="flex absolute flex-shrink bottom-[5%] gap-14 ml-16 mt-auto w-[20%] scale-110" />
    </>
  );
};

export default PageOne;
