import { useState } from 'react';

import googlePlay from '../../assets/googlePlay.png';

import Footer from '../../components/Footer.component';

import rakieta from '../../assets/download-page-rakieta.png';

const DownloadPage = () => {
  const [rocketAnimation, setRocketAnimation] = useState('');

  const handleClick = () => {
    setRocketAnimation('animate-rocketLaunch');
    setTimeout(() => {
      window.open(
        'https://play.google.com/store/games?hl=pl&gl=US&pli=1',
        '_blank'
      );
      setRocketAnimation('');
    }, 2000);
  };

  return (
    <>
      <main className="flex flex-col sca gap-16 ">
        <h2 className="mx-auto text-center text-white font-extrabold  xl:w-[75%] text-3xl lg:text-5xl w-full leading-normal ">
          ZAWSZE JEST ODPOWIEDNI MOMENT, ABY ROZPOCZĄĆ WŁASNY ROZWÓJ. ROZPOCZNIJ
          JUŻ DZIŚ!
        </h2>
        <button
          onClick={handleClick}
          className="hover:-translate-y-2 delay-100 active:translate-y-2 hover:shadow-2xl self-center mt-10 max-w-[400px] transition-transform duration-300 "
        >
          <img src={googlePlay} alt="donwload button" />
        </button>
        <div
          className={`absolute -z-10 -bottom-[20%] right-[10%] ${rocketAnimation} `}
        >
          <img src={rakieta} alt="rakieta robota" />
        </div>
      </main>
      <Footer position="flex absolute bottom-[5%] gap-14 ml-10" />
    </>
  );
};

export default DownloadPage;
