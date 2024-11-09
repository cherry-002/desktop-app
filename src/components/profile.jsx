import React from 'react';

const Profile = () => {
  return (
    <div className='h-full flex flex-col items-center justify-center max-[1150px]:order-1'>
      <div className='flex justify-center items-center h-28 w-28 rounded-full border-4 bg-gradient-to-t from-teal-300 via-sky-300 to-purple-400 border-white z-10'>
        <img src="./image/cool-cat.png" height={70} width={70} />
      </div>
      <div className='flex flex-col justify-center bg-slate-200 px-12 py-4 pt-14 -mt-12 rounded-lg shadow-md'>
        <p className='text-center'>Alireza Esmaeili</p>
        <p className='text-center text-slate-500 text-[15px]'>alirezaesmaeili@gmail.com</p>
        <div className='flex justify-around mt-3'>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[14px] font-semibold text-slate-400'>Exams</p>
            <p className='font-bold text-lg'>14</p>
          </div>
          <div className="h-12 border-l border-gray-400 mx-4"></div>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-[14px] font-semibold text-slate-400'>Time</p>
            <p className='font-bold text-lg'>2h 37m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
