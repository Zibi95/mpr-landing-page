import telephone from '../../assets/page2-telephone.png';
import PlanetImage from '../PlanetImage.component';
import robot1 from '../../assets/machanie.gif';
import AppInfo from '../AppInfo.component';

const PageTwo = ({ prevPage, nextPage, direction }) => {
  return (
    <>
      <AppInfo
        title={'Co potrafię?'}
        description={
          '"Mój przyjaciel robot" to aplikacja, która zachęci Cię do przeznaczenia wolnego czasu na rozwój nowych postanowień lub własnych zainteresowań.'
        }
        image={telephone}
        direction={direction}
      />

      <PlanetImage
        robot={robot1}
        prevPage={prevPage}
        nextPage={nextPage}
        direction={direction}
      />
    </>
  );
};

export default PageTwo;
