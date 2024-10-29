import React from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon, text, route }) => {
  return (
    <div className='w-full flex justify-center relative'>
      <Link to={route} className='flex justify-center gap-2 hover-sidebar items-center px-8 py-3 text-nowrap'>
        <div>{icon}</div>
        <div>{text}</div>
        <span className='second-after'></span>
      </Link>
    </div>
  );
};

export default SidebarItem;
