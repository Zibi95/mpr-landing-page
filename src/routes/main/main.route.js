import PageOne from '../../components/main-route-components/PageOne.component';
import PageTwo from '../../components/main-route-components/PageTwo.component';
import PageThree from '../../components/main-route-components/PageThree.component';

import page1 from '../../assets/page1.png';
import page2 from '../../assets/page2.png';
import page3 from '../../assets/page3.png';

const Main = () => {
  return (
    <>
      <PageOne />
      <div>
        <img
          className=" lg:w-[65%] transition-all absolute bottom-0 -z-10 left-[50%] -translate-x-[50%]"
          src={page1}
          alt="planeta"
        />
      </div>
    </>
  );
};

export default Main;
