import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import NewsLetterBanner from "./NewsLetterBanner";
import SideBar from "./SideBar";
import LogoNav from "./NavbarLogo";
import DesktopNav from "./NavbarDesktop";
import MobileNav from "./NavbarMobile";
import JobbsokerenButton from "./NavbarActionButton";
import UserIcon from "./NavbarUserIcon";
import { navigationData } from "@/data/navigationData";
import MobileNavToggle from "./NavbarMobileToggle";

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
        <div className="hidden lg:flex pr-4 items-center ">
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
