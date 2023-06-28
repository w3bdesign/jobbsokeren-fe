import { XMarkIcon, ArrowRightOnRectangleIcon, NewspaperIcon, UserIcon } from '@heroicons/react/24/outline';
import { useRef, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import Login from '../Authentication/Login';
import Logout from '../Authentication/logout';
import { RootState } from '@/store/store';



interface SideBarProps {
    showSideBar: boolean;
    handleSideBar: () => void;
}

const SideBar : React.FC<SideBarProps> =({showSideBar, handleSideBar}) => {

    const user = useSelector((state : RootState) => state.auth.user);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    // function to handle click outside the sidebar
    // close the sidebar if clicked outside
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (sidebarRef.current && event.target instanceof Node && !sidebarRef.current.contains(event.target)) {
            handleSideBar();
        }
    }, [handleSideBar]);
    

    useEffect(() => {
        if (showSideBar) {
            window.addEventListener('mousedown', handleClickOutside);
        } else {
            window.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showSideBar, handleClickOutside]);



    return (
        <div id="drawer-navigation" ref={sidebarRef} className={`fixed top-20 right-0 z-40 w-72 h-screen p-4 overflow-y-auto transition-transform duration-300 transform bg-zinc-50 drop-shadow-md ${showSideBar ? 'translate-x-0' : 'translate-x-full'}`}  aria-labelledby="drawer-navigation-label">
             <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase">{user?.displayName}</h5> 
            <button onClick={handleSideBar} type="button" className="absolute top-3 right-6 text-gray-400 bg-transparent border-none hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                <XMarkIcon className="w-6 h-6 text-gray-600" aria-hidden="true" />
                <span className="sr-only">Close modal</span>
            </button>
            <div className="py-8 overflow-y-auto">
                <ul className="space-y-2 font-medium text-gray-900">
                <li>
                    <RouterLink onClick={handleSideBar} to="/profil" className={`inline-flex items-center p-2 hover:text-indigo-600 ${user ? '' : 'opacity-50 cursor-not-allowed'}`}>
                        <div className="flex items-center">
                            <UserIcon className="w-6 h-6 mr-3 text-indigo-600" aria-hidden="true" />
                                Min profil
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink onClick={handleSideBar}  to="#" className={`inline-flex items-center p-2 hover:text-indigo-600 ${user ? '' : 'opacity-50 cursor-not-allowed'}`}>
                        <div className="flex items-center">
                            <NewspaperIcon className="w-6 h-6 mr-3 text-indigo-600" aria-hidden="true" />
                                Mine søknader
                        </div>
                    </RouterLink>
                </li>
               
               {!user && <li>
                    <Login>
                        <RouterLink to="#" className="inline-flex justify-between w-full items-center p-2 hover:text-indigo-600">
                            <div className="flex items-center">
                                <ArrowRightOnRectangleIcon className="w-6 h-6 mr-3 text-indigo-600" aria-hidden="true" />
                                Logg inn
                            </div>
                            {/* <div>
                                <span className="px-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">Pro</span>
                            </div> */}
                        </RouterLink>
                    </Login>
                </li>}
               { user && <li>
                    <Logout>
                        <RouterLink to="#" className="inline-flex justify-between w-full items-center p-2 hover:text-indigo-600">
                            <div className="flex items-center">
                                <ArrowRightOnRectangleIcon className="w-6 h-6 mr-3 text-indigo-600" aria-hidden="true" />
                                Logg ut
                            </div>
                            {/* <div>
                                <span className="px-2 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">Pro</span>
                            </div> */}
                        </RouterLink>
                    </Logout>
                </li>}

                </ul>
            </div>
        </div>

    )
}

export default SideBar;