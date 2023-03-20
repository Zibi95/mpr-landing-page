import telephone from '../../assets/phone_page_two.gif';
import PlanetImage from '../PlanetImage.component';
import robot2 from '../../assets/francua-robo.gif';
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
        robot={robot2}
        prevPage={prevPage}
        nextPage={nextPage}
        direction={direction}
      />
    </>
  );
};

export default PageTwo;
