import React from 'react'
import { LineGraph } from './lineGraph'

const Statistic = () => {
  return (
    <div className='px-2 flex justify-center flex-col ml-4 h-full  gap-2'>
      <h2 className='font-bold text-2xl'>Statistics</h2>
      <LineGraph />
    </div>
  )
}

export default Statistic