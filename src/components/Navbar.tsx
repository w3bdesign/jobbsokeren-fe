import React, { useState} from "react";
import { Bars4Icon, XMarkIcon, ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";
import { BiUserCircle } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { navigationData } from "@/data/navigationData";
import { useLocation } from "react-router-dom";
import NewsLetterBanner from "./NewsLetterBanner";
import SideBar from "./SideBar";



interface MobileNavProps {
    pathname: string;
    closeMobileMenu: () => void;
    nav: boolean;
    navigationData: {
        name: string;
        link: string;
        offset: number;
    }[];
}

interface PathProps {
    pathname: string;
}

const BreadCrumbNav : React.FC<PathProps> = ({pathname}) => {
  // Helper function to unslugify a string
  const unslugify = (str : string) =>
    str
      .split('-')
      .map(word => word.charAt(0)+ word.slice(1))
      .join(' ');

  // Split the pathname into segments and remove the first segment if it's empty
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  return (
    <nav className="hidden md:flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center ">
          <RouterLink to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600">
            <HomeIcon className="w-5 h-5 mr-3 text-gray-500" aria-hidden="true" />
            hjem
          </RouterLink>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={segment}>
            <div className="flex items-center">      
             <ChevronRightIcon className={`flex-shrink-0 w-5 h-5 mx-1 ${index === pathSegments.length - 1 ? "text-gray-400" : "text-gray-500"}`} aria-hidden="true" />
             <RouterLink to={`/${pathSegments.slice(0, index + 1).join('/')}`} className="hover:text-indigo-600 text-gray-500">
                {index === pathSegments.length - 1 ? unslugify(segment) : segment}
              </RouterLink>
            </div>
          </li>
          ))}
        </ol>
      </nav>
  )
}




const MobileNav : React.FC<MobileNavProps> = ({pathname, closeMobileMenu, nav, navigationData }) => {
    return (
        <div>
            {pathname === "/" && (
                <nav className={!nav ? "hidden" : "lg:hidden absolute bg-zinc-200 w-full px-8"}>
                  <ul>
                    {navigationData.map((link, index) => (
                      <li className="border-b-2 border-zinc-300 w-full hover:cursor-pointer" key={index}>
                        <Link
                          activeClass="active"
                          to={link.link.slice(1)}
                          smooth={true}
                          offset={link.offset}
                          duration={500}
                          onClick={closeMobileMenu}
                        >
                          {link.name}
                        </Link>
                      </li>
                     
                    ))}
                    <div className="flex flex-col my-4">
                        <RouterLink className="w-full" to="/jobbsokeren">
                            <button onClick={closeMobileMenu} className="px-8 py-3">
                                Prøv jobbsøkeren nå
                            </button>
                        </RouterLink>
                    </div>
                  </ul>
                </nav>
            )}
        </div>
    )
}

const LogoNav : React.FC<PathProps> = ({pathname}) => {
    return (
        <div>
            {pathname !== "/" ? (
                <RouterLink to="/">
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl hover:cursor-pointer">
                    JOBBSØKEREN
                </h1>
                </RouterLink>
            ) : (
                <Link
                    activeClass="active"
                    to=""
                    smooth={true}
                    offset={0}
                    duration={500}>
                <h1 className="text-3xl font-bold mr-4 sm:text-4xl hover:cursor-pointer">
                    JOBBSØKEREN
                </h1>
                </Link>
          )}
        </div>
    )
}


const Navbar : React.FC = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleSideBar = () => setShowSideBar(!showSideBar);
  const closeMobileMenu = () => setNav(false);
  const { pathname } = useLocation();

  return (
    <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-md">
      <div className="px-3 md:px-10 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
           <LogoNav 
            pathname={pathname}/> 
          {pathname === "/" && (
            <nav>
              <ul className="hidden lg:flex">
                {navigationData.map((link, index) => (
                  <li className="cursor-pointer hover:text-indigo-600" key={index}>
                    <Link
                      activeClass="underline underline-offset-8 text-indigo-600"
                      spy={true}
                      to={link.link.slice(1)}
                      smooth={true}
                      offset={link.offset}
                      duration={500}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {pathname !== "/" && (
           <BreadCrumbNav pathname={pathname} />
          )}
        </div>
        <div className="hidden lg:flex pr-4 items-center ">
          {pathname !== "/jobbsokeren" && (
            <RouterLink className="w-full" to="/jobbsokeren">
              <button className="px-8 py-3">Prøv jobbsøkeren nå</button>
            </RouterLink>
             )}
            {/* <div onClick={handleSideBar} className="relative ml-10">
              {!showSideBar && <BiUserCircle className="w-9 h-9 text-indigo-600 hover:cursor-pointer" />}
              {showSideBar && <RxCrossCircled className="w-9 h-9 text-indigo-600 hover:cursor-pointer" />}
            </div> */}
        </div>
      
        <div className="lg:hidden flex gap-3 mr-5 hover:cursor-pointer">
          {/* <div onClick={handleSideBar} className="relative ml-10">
            {!showSideBar && <BiUserCircle className="w-7 h-7 text-indigo-600 hover:cursor-pointer" />}
            {showSideBar && <RxCrossCircled className="w-7 h-7 text-indigo-600 hover:cursor-pointer" />}
          </div> */}
          {!nav && pathname === "/" && <Bars4Icon onClick={handleClick} className="w-7" /> }
          {nav && pathname === "/" && <XMarkIcon onClick={handleClick} className="w-7" /> }
        </div>
   
    </div>
    {/* Submenues */}
    <MobileNav 
        pathname={pathname} 
        closeMobileMenu={closeMobileMenu} 
        nav={nav} 
        navigationData={navigationData} />
    <NewsLetterBanner />
    <SideBar 
      showSideBar={showSideBar} 
      handleSideBar={handleSideBar}/>
    </div>
    );
};

export default Navbar;
