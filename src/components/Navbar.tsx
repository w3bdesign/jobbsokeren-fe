import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import JobbsokerenButton from './NavbarActionButton';
import DesktopNav from './NavbarDesktop';
import LogoNav from './NavbarLogo';
import MobileNav from './NavbarMobile';
import MobileNavToggle from './NavbarMobileToggle';
import UserIcon from './NavbarUserIcon';
import NewsLetterBanner from './NewsLetterBanner';
import SideBar from './SideBar';
import { navigationData } from '@/data/navigationData';

const Navbar : React.FC = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();

  const handleClick = () => setNav(!nav);
  const handleSideBar = () => setShowSideBar(!showSideBar);
  const closeMobileMenu = () => setNav(false);

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-md">
      <div className="px-3 md:px-10 flex justify-between items-center w-full h-full">
          <div className="flex items-center">
            <LogoNav pathname={pathname}/> 
            <DesktopNav pathname={pathname} />
          </div>
        <div className="hidden lg:flex items-center justify-center">
          <JobbsokerenButton pathname={pathname} />
          <UserIcon handleSideBar={handleSideBar} showSideBar={showSideBar} />
        </div>
        <MobileNavToggle 
          pathname={pathname} 
          nav={nav} 
          handleClick={handleClick}
          handleSideBar={handleSideBar}
          showSideBar={showSideBar}
        />
      </div>
      <MobileNav 
        pathname={pathname} 
        closeMobileMenu={closeMobileMenu} 
        nav={nav} 
        navigationData={navigationData} />
      <NewsLetterBanner />
      <SideBar 
        showSideBar={showSideBar} 
        handleSideBar={handleSideBar} />
    </div>
  );
};

export default Navbar;
