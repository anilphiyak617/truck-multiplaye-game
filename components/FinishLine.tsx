import Image from 'next/image'
import React, { useContext } from 'react'
import finishLineIcon from '../public/icons/finishLineIcon.svg'
import Score from './Score'
import { scoreContext } from '@/context/scoreContext'
function FinishLine() {
  const { data } = useContext(scoreContext)
  return (
    <div className='w-[12%] bg-[#BD2C26] grid grid-cols-2'>
      <div className='flex  flex-col justify-around'>
        {Object.keys(data).map(((id) => <Score key={id} value={data[id] * 10} /> ))}
      </div>
      {/* Finish flag */}
      <div className='bg-black' > <Image src={finishLineIcon} alt="Finish Line" style={{ height: "100%", objectFit: 'cover' }} />  </div>
    </div>
  )
}

export default FinishLine

// grid grid - rows - [repeat(10, minmax(4px, 1fr))]