import React from 'react'
import { TiHeartFullOutline } from 'react-icons/ti'



const WordSetItem = ({ gradient = "" }) => {

  

  const style = `m-3 w-5/6 h-[11rem] rounded-2xl ${gradient}`
  return (
    <div className={style}>
      <div>
        <img src="" alt="" />
        <div className='bg-white h-[35px] w-[35px] rounded-full flex justify-center items-center bg-opacity-35'>
          <TiHeartFullOutline color='white' size={19} />
        </div>
        <p className='text-white text-[1.5rem] font-[700]'>tecxt</p>
      </div>
    </div>
  )
}

export default WordSetItem