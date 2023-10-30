import Image from 'next/image'
import React from 'react'

import CarIcon from '@/public/icons/truckIcon.svg'

type typeCar = {
    id: number;
    className: string;
    style: React.CSSProperties | undefined,
    onClick : ()=>void
}

function Car({ id ,className,style,onClick}:typeCar) {
  return (
      <div onClick={onClick} className={className} style={style}>
          <Image src={CarIcon} alt='Truck' style={{objectFit:'fill'}} />
    </div>
  )
}

export default Car