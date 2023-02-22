import telephone from '../../assets/page2-telephone.png';
import PlanetImage from '../PlanetImage.component';
import robot1 from '../../assets/machanie.gif';
import AppInfo from '../AppInfo.component';

const PageThree = ({ prevPage }) => {
  return (
    <>
      <AppInfo
        title={'Co oferuję w zamian?'}
        description={
          ' Dzięki działaniom, które będziesz podejmował w aplikacji nasz przyjaciel robot przyznaje punkty, które możesz wymienić w naszym wewnętrznym sklepie, a co najważniejsze satysfakcję z pracy jaką włożysz, aby się rozwijać.'
        }
        image={telephone}
      />

      <PlanetImage
        prevPage={prevPage}
        robot={robot1}
      />
    </>
  );
};

export default PageThree;
