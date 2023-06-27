// MobileNav.jsx
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

import UserIcon from './NavbarUserIcon';

interface MobileNavProps {
    pathname: string;
    nav: boolean;
    handleClick: () => void;
    handleSideBar: () => void;
    showSideBar: boolean;
}

const MobileNavToggle : React.FC<MobileNavProps> = ({pathname, nav, handleClick, handleSideBar, showSideBar}) => (
    <div className="lg:hidden flex gap-3 mr-5 hover:cursor-pointer">
        <UserIcon handleSideBar={handleSideBar} showSideBar={showSideBar} />
        {!nav && pathname === '/' && <Bars4Icon onClick={handleClick} className="w-7" /> }
        {nav && pathname === '/' && <XMarkIcon onClick={handleClick} className="w-7" /> }
    </div>
);

export default MobileNavToggle;
