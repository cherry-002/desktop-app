import React from 'react'
import { TiHeartFullOutline } from 'react-icons/ti'



const WordSetItem = ({ gradient, title, img }) => {

  

  const style = `m-3 w-11/12 h-[11rem] rounded-2xl ${gradient} shadow-md`
  return (
    <div className={style}>
      <div className='flex justify-between p-3'>
        <img src={img} height={100} width={100}/>
        <div className='bg-white h-[35px] w-[35px] rounded-full flex justify-center items-center bg-opacity-35'>
          <TiHeartFullOutline color='white' size={19} />
        </div>
        
      </div>
      <p className='text-white text-[1.25rem] font-[700] p-2 px-4'>{title}</p>
    </div>
  )
}

export default WordSetItem