import PageOne from '../../components/main-route-components/PageOne.component';
import page1 from '../../assets/page1.png';

const Main = () => {
  return (
    <>
      <PageOne />
      <div>
        <img
          className=" scale-125 md:w-[65%] md:scale-100 transition-all absolute bottom-0 -z-10 left-[50%] -translate-x-[50%]"
          src={page1}
          alt="planeta"
        />
      </div>
    </>
  );
};

export default Main;
