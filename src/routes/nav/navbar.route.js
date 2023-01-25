import logo from '../../assets/logo.png';
import Background from '../../components/Background.component';

const Navbar = () => {
  return (
    <>
      <Background />
      <nav className="flex items-center justify-between m-8">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="text-white font-semibold text-2xl flex gap-7 ">
          <span className="cursor-pointer hover:underline">DOWNLOAD APP</span>
          <span className="cursor-pointer hover:underline">CONTACT US</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
