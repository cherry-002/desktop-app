import React from 'react';

const Profile = () => {
  return (
    <>
      <div className="hidden 1150px:flex h-full flex-col items-center justify-center">
        <Pfp rounded="full" />
        <div className="flex flex-col justify-center bg-slate-200 px-12 py-4 pt-14 -mt-12 rounded-lg shadow-md">
          <Name />
          <Email />
          <Stats />
        </div>
      </div>

      <div className="1150px:hidden justify-items-center">
        <ProfileSmall />
      </div>
    </>
  );
};

const Pfp = ({ rounded }) => {
  const round = 'rounded-' + rounded;
  const styles = `flex justify-center items-center h-28 w-28 ${round} border-4 bg-gradient-to-t from-teal-300 via-sky-300 to-purple-400 border-white z-10`;
  return (
    <div className={styles}>
      <img
        src="./image/cool-cat.png"
        height={70}
        width={70}
      />
    </div>
  );
};

const Name = () => {
  return (
    <p className="text-center max-[1150px]:text-start">Alireza Esmaeili</p>
  );
};

const Email = () => {
  return (
    <p className="text-center text-slate-500 text-[15px] max-[1150px]:text-start">
      alirezaesmaeili@gmail.com
    </p>
  );
};

const Stats = () => {
  return (
    <div className="flex justify-around mt-3">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[14px] font-semibold text-slate-400">Exams</p>
        <p className="font-bold text-lg">14</p>
      </div>
      <div className="h-12 border-l border-gray-400 mx-4"></div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[14px] font-semibold text-slate-400">Time</p>
        <p className="font-bold text-lg">2h 37m</p>
      </div>
    </div>
  );
};

const ProfileSmall = () => {
  return (
    <div className="bg-slate-200 rounded-xl shadow-md h-max w-[25rem]">
      <div className="flex gap-[3vw] items-center p-4">
        <Pfp rounded="xl" />
        <div>
          <Name />
          <Email />
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Profile;
