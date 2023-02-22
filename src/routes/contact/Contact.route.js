import robot from '../../assets/contact-robo.png';
import Footer from '../../components/Footer.component';
import Input from '../../components/Input.component';
const Contact = () => {
  return (
    <>
      <div className=" mx-auto md:w-[50%] xl:w-[35%] w-[70%]">
        <header className="text-xl font-bold text-center uppercase text-slate-200 ">Formularz kontaktowy</header>
        <form className="flex flex-col items-center w-full gap-8 mt-5 leading-relaxed ">
          <Input
            type="email"
            name="email"
            id="email"
            label="Adres e-mail"
          />
          <Input
            type="text"
            name="subject"
            id="subject"
            label="Temat"
          />
          <Input
            type="text"
            name="content"
            id="content"
            label="Treść"
            rows={3}
          />
          <button className="w-40 p-3 text-xl font-semibold bg-[#2DABC8] rounded-lg hover:bg-[#780E63] hover:scale-110 transition-all text-[white]">
            Wyślij
          </button>
        </form>
      </div>
      <img
        className="absolute bottom-0 w-[40%] cursor-auto -z-10"
        src={robot}
        alt="robot"
      />
      <Footer position="flex absolute bottom-[5%] w-[65%] gap-14 ml-24 justify-center" />
    </>
  );
};

export default Contact;
