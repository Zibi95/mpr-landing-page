import { Outlet, Link } from 'react-router-dom';

import logo from '../../assets/logo.png';
import Background from '../../components/Background.component';


const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between m-8">
        <Link to={'/'}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="text-white font-semibold text-lg flex gap-7 ">
          <Link to={'download'} className="cursor-pointer hover:underline">
            DOWNLOAD APP
          </Link>
          <Link to={'contact'} className="cursor-pointer hover:underline">
            CONTACT US
          </Link>
        </div>
      </nav>

      <Background />

      <Outlet />
    </>
  );
};

export default Navbar;
