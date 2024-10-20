import React from 'react';
import SidebarItem from './sidebarItem';
import { FaHouse } from 'react-icons/fa6';
import { FaBook } from 'react-icons/fa';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosBookmarks } from 'react-icons/io';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem icon={<FaHouse accentHeight={"5px"}/>} text={"Dashboard"}/>
      <SidebarItem icon={<IoIosBookmarks />} text={"Lessons"}/>
      <SidebarItem icon={<FaBook />} text={"Dictionary"}/>
      <hr className='hr-line'/>
      <SidebarItem icon={<IoSettingsSharp />} text={"Setting"}/>
      <SidebarItem icon={<RiLogoutBoxRFill />} text={"Log out"}/>
    </div>
  );
};

export default Sidebar;
