import React from 'react'

const QuickStartComponent = ({ title, time, img, gradient}) => {

  const iconStyle = `${gradient} p-1 rounded-xl`

  return (
    <div className='flex items-center gap-4 bg-white rounded-xl p-3 max-[1150px]:w-[32%] max-[1150px]:gap-2 max-[1150px]:p-2'>
      <div className={iconStyle}>
        <img className='max-[1150px]:w-[60px]' src={img} width={70} height={70}/>
      </div>
      <div>
        <p className='text-[18px] max-[750px]:text-[2.25vw]'>{title}</p>
        <p className='text-[14px] max-[750px]:text-[1.75vw] text-slate-400'>{time} min</p>
      </div>
    </div>
  )
}

export default QuickStartComponent