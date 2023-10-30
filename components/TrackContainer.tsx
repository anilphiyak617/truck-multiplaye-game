import React, { useContext } from 'react'
import Track from './Track'
import Car from './Car';
import { scoreContext } from '@/context/scoreContext';

function TrackContainer() {
  
  const { data } = useContext(scoreContext)
  
  const playerCount = data?.length || 0;
  return (
    <div className={`w-full bg-white grid  grid-rows-[repeat(${playerCount},minmax(15px,1fr))] relative `}>
      {Object.keys(data).map((key, index) => <Track key={key} id={ key} />)}
    </div>
  )
}

export default TrackContainer