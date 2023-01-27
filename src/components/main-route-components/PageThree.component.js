import leftArrow from '../../assets/left.png';
import telephone from '../../assets/page2-telephone.png';

const PageThree = () => {
  return (
    <>
      <main className="flex justify-around mt-24 flex-wrap">
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
      </main>

      <div className=" right-[75%] absolute bottom-[15%]">
        <button className="hover:-translate-x-7 transition-transform">
          <img src={leftArrow} alt="left arrow" />
        </button>
      </div>
    </>
  );
};

export default PageThree;
