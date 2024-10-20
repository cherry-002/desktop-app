import React from 'react';

const SidebarItem = ({ icon, text }) => {
  return (
    <div className='w-full flex justify-center relative'>
      <button className='flex justify-center gap-2 hover items-center px-8 py-3 text-nowrap'>
        <div>{icon}</div>
        <div>{text}</div>
      </button>
    </div>
  );
};

export default SidebarItem;
