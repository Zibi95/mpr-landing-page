import { Outlet, Link } from 'react-router-dom';
import Background from '../../components/Background.component';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between my-8 mx-2 ">
        <Link to={'/'}>
          <img
            src={logo}
            alt="logo"
          />
        </Link>
        <div className="flex text-xs font-semibold text-white md:text-xl gap-7 ">
          <Link
            to={'download'}
            className="cursor-pointer hover:underline">
            DOWNLOAD APP
          </Link>
          <Link
            to={'contact'}
            className="cursor-pointer hover:underline">
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
