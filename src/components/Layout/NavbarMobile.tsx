import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';


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

const MobileNav : React.FC<MobileNavProps> = ({pathname, closeMobileMenu, nav, navigationData }) => {
    return (
        <div>
            {pathname === '/' && (
                <nav className={!nav ? 'hidden' : 'lg:hidden absolute bg-zinc-200 w-full px-8'}>
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

export default MobileNav;