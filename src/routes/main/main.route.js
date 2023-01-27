import { useState } from 'react';

import PageOne from '../../components/main-route-components/PageOne.component';
import PageTwo from '../../components/main-route-components/PageTwo.component';
import PageThree from '../../components/main-route-components/PageThree.component';

const Main = () => {
  const [page, setPage] = useState(0);

  const prevPage = () => {
    setPage(prev => (prev -= 1));
  };

  const nextPage = () => {
    setPage(prev => (prev += 1));
  };
  return (
    <>
      {(page === 0 && <PageOne nextPage={nextPage} />) ||
        (page === 1 && <PageTwo nextPage={nextPage} prevPage={prevPage} />) ||
        (page === 2 && <PageThree prevPage={prevPage} />)}
    </>
  );
};

export default Main;
