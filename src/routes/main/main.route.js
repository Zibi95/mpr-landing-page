import PageOne from '../../components/main-route-components/PageOne.component';
import PageTwo from '../../components/main-route-components/PageTwo.component';

import page1 from '../../assets/page1.png';
import page2 from '../../assets/page2.png';

const Main = () => {
  return (
    <>
      <PageTwo />
      <div>
        <img
          className=" lg:w-[65%] transition-all absolute bottom-0 -z-10 left-[50%] -translate-x-[50%]"
          src={page2}
          alt="planeta"
        />
      </div>
    </>
  );
};

export default Main;
