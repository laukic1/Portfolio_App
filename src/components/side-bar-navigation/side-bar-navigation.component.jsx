import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { IoMdContact } from "react-icons/io";
import { BiSolidHomeSmile, BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import Logo from '../../assets/logo.svg';
import ThemeIcon from "../theme-icon/theme-icon.component";

import { Link, Outlet } from "react-router-dom";

import { motion as m } from "framer-motion";

import SideBarIcon from "../side-bar-icon/side-bar-icon-component";
const Divider = () => <hr className='sidebar-hr' />;

const SideBar = () => {
  return (
    <>
    <div>
    <m.div
      initial={{ transform: 'translateX(-50px)' }} transition={{ duration: 0.3 }} animate={{ transform: 'translateX(0)' }}
     className="fixed z-50 left-0 bg-white dark:bg-gray-900 m-0 bottom-0 w-screen h-16 flex flex-row justify-between sm:fixed sm:top-0 sm:left-0 sm:h-screen sm:w-16 sm:m-0 sm:flex sm:flex-col sm:bg-white sm:dark:bg-gray-900 text-white shadow-2xl sm:shadow-xl">
      <Link to='/'><SideBarIcon text={'Home'} icon={<BiSolidHomeSmile size="28" />} /></Link>
      <Divider />
      <Link to='projects'><SideBarIcon text={'Projects'} icon={<HiMiniCodeBracketSquare size="28" />} /></Link>
      <Link to='about'><SideBarIcon text={'About'} icon={<IoMdContact size="28" />} /></Link>
      <Link to='contact'><SideBarIcon text={'Contact'} icon={<BiSolidMessageRoundedDetail size="28" />} /></Link>
      <div className="hidden sm:flex-grow sm:flex-shrink"></div>
      <Divider />
      <ThemeIcon darkIcon={<BsFillMoonFill size="28" />} lightIcon={<BsFillSunFill size="28"  />}  />
      <img className='logo-icon' src={Logo} />
    </m.div>
    
    </div>
    <Outlet />
    </>
  );
};
export default SideBar;
