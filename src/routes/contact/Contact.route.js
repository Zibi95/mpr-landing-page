import robot from '../../assets/contact-robo.png';
import Footer from '../../components/Footer.component';
import Input from '../../components/Input.component';
const Contact = () => {
  return (
    <>
      <div className=" mx-auto md:w-[50%] xl:w-[35%]  w-[70%]">
        <header className="text-xl font-bold text-center uppercase text-slate-200 mb-10 ">Formularz kontaktowy</header>
        <form method='POST' action='https://formsubmit.co/kontakt@mojprzyjacielrobot.pl' className="flex flex-col items-center w-full gap-6 leading-relaxed">
          <Input
            type="email"
            name="email"
            id="email"
            label="Adres e-mail"
          />
          <Input
            type="text"
            name="title"
            id="title"
            label="Tytuł wydarzenia"
          />
          <Input
            type="text"
            name="city"
            id="city"
            label="Miasto, w którym odbywać się będzie wydarzenie"
          />
          <Input
            type="text"
            name="image"
            id="image"
            label="Zdjęcie promujące wydarzenie"
          />
          <Input
            type="text"
            name="description"
            id="description"
            label="Opis wydarzenia..."
            rows={4}
          />
          <button className="w-40 p-3 text-xl font-semibold bg-[#2DABC8] rounded-lg hover:bg-[#780E63] hover:scale-110 transition-all text-white">
            Wyślij
          </button>
        </form>
      </div>
      <img
        className="absolute bottom-0 w-[40%] cursor-auto -z-10"
        src={robot}
        alt="robot"
      />
      <Footer position="flex flex-col absolute bottom-[5%] right-2 gap-3 sm:gap-14  sm:flex-row  justify-center" />
    </>
  );
};

export default Contact;
