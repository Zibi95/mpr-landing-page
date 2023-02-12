import robot from '../../assets/contact-robo.png';
import Footer from '../../components/Footer.component';
import Input from '../../components/Input.component';
const Contact = () => {
  return (
    <>
      <div className=" ml-[35%] mt-24 w-[35%]">
        <header className="text-2xl font-bold text-center text-white uppercase ">Formularz kontaktowy</header>
        <form className="flex flex-col items-center w-full gap-8 mt-10 leading-relaxed ">
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
            rows={10}
          />

          <button className="w-40 p-3 text-xl font-semibold bg-white rounded-lg">Wyślij</button>
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
