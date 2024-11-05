import React from 'react';
import SidebarItem from './sidebarItem';
import { FaHouse } from 'react-icons/fa6';
import { FaBook } from 'react-icons/fa';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { IoSettingsSharp } from 'react-icons/io5';
import { IoIosBookmarks } from 'react-icons/io';
import { AiFillExperiment } from 'react-icons/ai';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarItem
        route={'dashboard'}
        icon={<FaHouse accentHeight={'5px'} />}
        text={'Dashboard'}
      />
      <SidebarItem
        route={'lessons'}
        icon={<IoIosBookmarks />}
        text={'Lessons'}
      />
      <SidebarItem
        route={'dictionary'}
        icon={<FaBook />}
        text={'Dictionary'}
      />
      <SidebarItem
        route={'experiment'}
        icon={<AiFillExperiment />}
        text={'Experiment'}
      />
      <hr className="hr-line" />
      <SidebarItem
        route={'setting'}
        icon={<IoSettingsSharp />}
        text={'Setting'}
      />
      <SidebarItem
        icon={<RiLogoutBoxRFill />}
        text={'Log out'}
      />
    </div>
  );
};

export default Sidebar;
