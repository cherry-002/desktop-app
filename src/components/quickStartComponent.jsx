import React from 'react'

const QuickStartComponent = ({ title, time, img, gradient}) => {

  const iconStyle = `${gradient} p-1 rounded-xl`

  return (
    <div className='flex items-center gap-4 bg-white rounded-xl p-3'>
      <div className={iconStyle}>
        <img src={img} width={70} height={70}/>
      </div>
      <div>
        <p className='text-[18px]'>{title}</p>
        <p className='text-[14px] text-slate-400'>{time} min</p>
      </div>
    </div>
  )
}

export default QuickStartComponent