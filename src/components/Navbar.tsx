import {useState} from "react";
import { Bars4Icon, XMarkIcon  } from "@heroicons/react/24/outline";
import { Link } from 'react-scroll';
import { navigationData } from "@/data/navigationData";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const closeMobileMenu = () => setNav(false);

    return (
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-md">
            <div className="px-3 md:px-10 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <Link activeClass="active" to={""} smooth={true} offset={0} duration={500}>
                        <h1 className="text-3xl font-bold mr-4 sm:text-4xl hover:cursor-pointer">JOBBSØKEREN</h1> 
                    </Link> 
                    <nav>
                        <ul className="hidden md:flex">
                            {navigationData.map((link, index) =>
                                <li className="cursor-pointer hover:text-indigo-600" key={index}>
                                    <Link activeClass="underline underline-offset-8 text-indigo-600" spy={true} to={link.link.slice(1)} smooth={true} offset={link.offset} duration={500}>
                                        {link.name}
                                    </Link> 
                                </li>
                            )}
                        </ul>
                    </nav>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-6">Logg inn</button>
                    <button className="px-8 py-3">Registrer deg</button>
                </div>
                <div className="md:hidden mr-5 hover:cursor-pointer" onClick={handleClick}>
                    {!nav ? <Bars4Icon className="w-7"/> : <XMarkIcon className="w-7"/>}
                </div>
            </div>
            <nav className={!nav ? 'hidden':  'md:hidden absolute bg-zinc-200 w-full px-8'}>                    
                <ul>
                    {navigationData.map((link, index) => 
                        <li className="border-b-2 border-zinc-300 w-full hover:cursor-pointer" key={index}>
                            <Link activeClass="active" 
                                to={link.link.slice(1)} 
                                smooth={true} 
                                offset={link.offset} 
                                duration={500}
                                onClick={closeMobileMenu}>
                                {link.name} 
                            </Link> 
                        </li>
                    )}
                    <div className="flex flex-col my-4">
                        <button className="mb-4 px-8 py-3 bg-transparent text-indigo-600 border-indigo-600 ">Logg inn</button>
                        <button className="px-8 py-3">Registrer deg</button>
                    </div>
                </ul>
            </nav>
        </div>
    )
    
}

export default Navbar;