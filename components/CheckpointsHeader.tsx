import React, { PropsWithChildren } from 'react'
import styles from './styles.module.css'


const Flag = ({ children ,  }: PropsWithChildren<{ name?: string }>) => {
    return <div className='text-2xl w-16 h-12  text-white  italic  font-bold  font-sans flex justify-center  items-center p-4 rounded-md border border-red-400'>{children}</div>
}

const points = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
function CheckpointsHeader() {

    return <div className='  bg-[#181818] row-span-2 w-full h-auto flex  justify-start items-center'>
        <div className={styles['gradient-header'] + ' w-[18%] text-white text-3xl italic  font-bold  font-sans h-3/5 flex items-center p-4 rounded-r-md '}>  PLAYERS</div>
        {/* check-points */}
        <div className='h-3/5 flex justify-around  w-full items-center'>
            {points.map(val => <Flag>{ val}</Flag>)}
        {/*  final-checkpoint */}
        <div className={styles['gradient-header'] + ' text-white text-3xl italic  font-bold  font-sans h-auto flex items-center p-4 rounded-md '}>  100</div>
        </div>
        {/* // dummy */}
            <div className='w-[12%]'></div>
  </div>

  
}

export default CheckpointsHeader