import PageOne from '../../components/main-page-1/PageOne.component';
import planeta from '../../assets/planetka.png';
import robot from '../../assets/robot.png';

const Main = () => {
  return (
    <>
      <div className=" -z-[1] absolute bottom-0 left-1/2 w-[75%] -translate-x-1/2  ">
        <img className="w-full" src={planeta} alt="planeta" />
        <img
          alt="robot"
          className="absolute bottom-[50%] left-1/2 -translate-x-1/2 "
          src={robot}
        />
      </div>
      <PageOne />
    </>
  );
};

export default Main;
