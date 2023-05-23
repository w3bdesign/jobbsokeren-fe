import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";


interface PathProps {
    pathname: string;
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

export default LogoNav;