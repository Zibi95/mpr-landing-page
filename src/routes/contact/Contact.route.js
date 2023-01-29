import robot from '../../assets/contact-robo.png';
import Footer from '../../components/Footer.component';

const Contact = () => {
  return (
    <>
      <div className=" ml-[35%] mt-24 w-[35%]">
        <header className=" text-white text-center font-bold uppercase text-2xl">
          Formularz kontaktowy
        </header>
        <form className="flex flex-col items-center  gap-8 mt-10  leading-relaxed ">
          <div className="relative w-full">
            <input
              className="focus:outline-none peer border-2 text-gray-900 focus:border-rose-600 placeholder-transparent h-12 w-full rounded-lg p-1"
              type="email"
              name="email"
              placeholder="Email address"
              id="email"
            />
            <label className="absolute select-none text-white -top-6 left-1 peer-focus:text-white peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-placeholder-shown:text-lg peer-focus:text-lg transition-all ">
              Adres e-mail
            </label>
          </div>
          <div className="relative w-full">
            <input
              className="focus:outline-none peer border-2 text-gray-900 focus:border-rose-600 placeholder-transparent h-12 w-full rounded-lg p-1"
              type="text"
              name="subject"
              placeholder="Temat"
              id="subject"
            />
            <label className="absolute select-none text-white -top-6 left-1 peer-focus:text-white peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-placeholder-shown:text-lg peer-focus:text-lg transition-all ">
              Temat
            </label>
          </div>
          <div className="relative w-full">
            <textarea
              className="focus:outline-none peer border-2 text-gray-900 focus:border-rose-600 placeholder-transparent h-60 w-full rounded-lg p-1"
              type="email"
              name="email"
              placeholder="Treść"
              id="email"
            />
            <label className="absolute select-none text-white -top-6 left-1 peer-focus:text-white peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-placeholder-shown:text-lg peer-focus:text-lg transition-all ">
              Treść
            </label>
          </div>
          <button className="self-center w-full ">Wyślij</button>
        </form>
      </div>
      <img className="absolute bottom-0" src={robot} alt="robot" />
      <Footer position="flex absolute bottom-[5%] w-[65%] gap-14 ml-24 justify-center" />
    </>
  );
};

export default Contact;
