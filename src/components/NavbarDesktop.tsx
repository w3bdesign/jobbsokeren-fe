// DesktopNav.jsx
import React from "react";
import { Link } from "react-scroll";
import { navigationData } from "@/data/navigationData";
import BreadCrumbNav from "./NavbarBreadCrumbs";

interface PathProps {
    pathname: string;
}

const DesktopNav: React.FC<PathProps> = ({pathname}) => {
    if(pathname === "/") {
        return (
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
                            duration={500}
                        >
                            {link.name}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
        );
    }

    if(pathname !== "/") {
        return (
            <BreadCrumbNav pathname={pathname} />
        );
    }

    return null;
};

export default DesktopNav;
