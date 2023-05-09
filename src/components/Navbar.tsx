import { useState } from "react";
import { Bars4Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { navigationData } from "@/data/navigationData";
import { useLocation } from "react-router-dom";


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

interface LogoNavProps {
    pathname: string;
}


const MobileNav = ({pathname, closeMobileMenu, nav, navigationData }: MobileNavProps) => {
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
                        <RouterLink className="w-full" to="/editor">
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

const LogoNav = ({pathname} : LogoNavProps) => {
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


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
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
        </div>
        <div className="hidden lg:flex pr-4">
          {pathname !== "/editor" && (
            <RouterLink className="w-full" to="/editor">
              <button className="px-8 py-3">Prøv jobbsøkeren nå</button>
            </RouterLink>
          )}
        </div>
        {pathname === "/" && (
          <div className="lg:hidden mr-5 hover:cursor-pointer" onClick={handleClick}>
            {!nav ? (
              <Bars4Icon className="w-7" />
            ) : (
              <XMarkIcon className="w-7" />
            )}
          </div>
        )}
    </div>
    <MobileNav 
        pathname={pathname} 
        closeMobileMenu={closeMobileMenu} 
        nav={nav} 
        navigationData={navigationData} />
    </div>
    );
};

export default Navbar;
