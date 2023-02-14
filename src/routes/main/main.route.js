import { useState, Suspense, lazy } from 'react';

import PageOne from '../../components/main-route-components/PageOne.component';
// import PageTwo from '../../components/main-route-components/PageTwo.component';
// import PageThree from '../../components/main-route-components/PageThree.component';

const PageTwo = lazy(() => import('../../components/main-route-components/PageTwo.component'));
const PageThree = lazy(() => import('../../components/main-route-components/PageThree.component'));

const Main = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const prevPage = val => {
    setPage([page + val, val]);
  };

  const nextPage = val => {
    setPage([page + val, val]);
  };

  if (page === 0) {
    return (
      <PageOne
        nextPage={nextPage}
        direction={direction}
      />
    );
  } else {
    return (
      <Suspense>
        {page === 1 ? (
          <PageTwo
            nextPage={nextPage}
            prevPage={prevPage}
            direction={direction}
          />
        ) : (
          <PageThree
            prevPage={prevPage}
            direction={direction}
          />
        )}{' '}
      </Suspense>
    );
  }
};

export default Main;
