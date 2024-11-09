import React from 'react'
import { LineGraph } from './lineGraph'

const Statistic = () => {
  return (
    <div className='px-2 flex justify-center flex-col ml-4 max-[1150px]:m-0 h-full gap-2 max-[1150px]:order-4'>
      <h2 className='font-bold text-2xl'>Statistics</h2>
      <LineGraph />
    </div>
  )
}

export default Statistic