import React from 'react'
import GamerInput from './GamerInput'

function SideBar() {
  const playerList = [1,2,3,4,,5,6,7,8,9,10,]
  return (
    <div className='w-[18%] bg-[#BD2C26]  grid  grid-rows-[repeat(${playerCount},minmax(15px,1fr))]'>
      {playerList.map(((id) => <GamerInput id={id} key={id} />))}
      </div>
  )
}

export default SideBar