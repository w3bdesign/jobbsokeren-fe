import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/24/outline";

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

export default BreadCrumbNav;