import { useState } from 'react';

import PageOne from '../../components/main-route-components/PageOne.component';
import PageTwo from '../../components/main-route-components/PageTwo.component';
import PageThree from '../../components/main-route-components/PageThree.component';

const Main = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const prevPage = val => {
    setPage([page + val, val]);
  };

  const nextPage = val => {
    setPage([page + val, val]);
  };

  const pagesArray = [
    <PageOne nextPage={nextPage} direction={direction} />,
    <PageTwo nextPage={nextPage} prevPage={prevPage} direction={direction} />,
    <PageThree prevPage={prevPage} direction={direction} />,
  ];
  return <>{pagesArray[page]}</>;
};

export default Main;
