// UserIcon.jsx
import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import Avatar from './Avatar';
import { RootState } from '@/store/store';


interface UserIconProps {
    handleSideBar: () => void;
    showSideBar: boolean;
}

const UserIcon: React.FC<UserIconProps> = ({handleSideBar, showSideBar}) => {
    const user = useSelector((state : RootState) => state.auth.user);
    const { pathname } = useLocation();
    return (
        <div onClick={handleSideBar} className="relative w-20">
            {/* {!showSideBar && pathname === '/jobbsokeren' && user && <AvatarText name={user.displayName} email={user.email} image={user.photoURL} />} */}
            {!showSideBar && pathname && user && <Avatar img={user.photoURL} /> }
            {!showSideBar && !user && <BiUserCircle className="w-9 h-9 m-auto text-indigo-600 hover:cursor-pointer" />}
            {showSideBar && <RxCrossCircled className="w-9 h-9 m-auto text-indigo-600 hover:cursor-pointer" />}
        </div>
    );
}

    

export default UserIcon;
