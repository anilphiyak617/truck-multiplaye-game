import React, { useContext, useState } from 'react'
import RoadIcon from '../public/icons/roadIcon.svg'
import Image from 'next/image'
import Car from './Car'
import styles from '@/components/styles.module.css'
import GamerInput from './GamerInput'
import Score from './Score'
import { scoreContext } from '@/context/scoreContext'


function Track({ id }: {id:string}) {

  
  const {data,setNewPosWithId} = useContext(scoreContext) 
  const currCheckPoint = data[id];
  const handleMoveCar = () => {
    if (data.id >= 9) return;
    setNewPosWithId(id, data[id] + 1)
  }

  return (
    <div className='h-full w-full   flex items-center'>
      <Image src={RoadIcon} alt="Road" style={{ objectFit: "fill" }} sizes='' />
      <Car onClick = {() => handleMoveCar()} id={1} className={`w-[7%] absolute transition-all ease-in-out`} style={{ transform: `translateX(${currCheckPoint * 127}%)` }} />
    </div>
  )
}

export default Track