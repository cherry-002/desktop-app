import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarItem = ({ icon, text, route }) => {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='w-full flex justify-center relative'>
      <Link to={route} className='flex justify-center gap-2 hover-sidebar items-center px-8 py-3 text-nowrap max-md:px-0 max-md:gap-0 max-sm:px-2'>
        <div>{icon}</div>
        {width < 768 ? null : <div>{text}</div>}
        <span className='second-after'></span>
      </Link>
    </div>
  );
};

export default SidebarItem;
