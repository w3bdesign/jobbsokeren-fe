// UserIcon.jsx
import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { RxCrossCircled } from "react-icons/rx";

interface UserIconProps {
    handleSideBar: () => void;
    showSideBar: boolean;
}

const UserIcon: React.FC<UserIconProps> = ({handleSideBar, showSideBar}) => (
    <div onClick={handleSideBar} className="relative ml-10">
        {!showSideBar && <BiUserCircle className="w-9 h-9 text-indigo-600 hover:cursor-pointer" />}
        {showSideBar && <RxCrossCircled className="w-9 h-9 text-indigo-600 hover:cursor-pointer" />}
    </div>
);

export default UserIcon;
