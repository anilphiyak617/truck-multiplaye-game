import React from 'react'

interface PropTypes{
    value:number
}
function Score({value}:PropTypes) {
  return (
      <div className='flex justify-center items-center'>
          <div className={`w-4/5 bg-white text-lg font-bold pl-1 pr-1 p-1 text-center rounded-sm`} >{ value}</div>
    </div>
  )
}

export default Score