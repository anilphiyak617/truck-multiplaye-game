import Image from 'next/image'
import { Inter } from 'next/font/google'
import CheckpointsHeader from '@/components/CheckpointsHeader'
import Track from '@/components/Track';
import { useContext, useState } from 'react';
import SideBar from '@/components/SideBar';
import FinishLine from '@/components/FinishLine';
import TrackContainer from '@/components/TrackContainer';
import Car from '@/components/Car';
import { ScoreModelInterface, scoreContext } from '@/context/scoreContext';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [scoreState, setScoreState] = useState({ '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0,' 8': 0, '9': 0, '10': 0 });
  
  const setNewPosWithId = (id:string, value:number) => { 
    
    setScoreState((prevState) => { 
      const updatedState:ScoreModelInterface['data'] = structuredClone(prevState)
      updatedState[id] = value;
      return updatedState
    })
  }

  return (
    <main className='w-[100vw] h-[100vh]'>
      <scoreContext.Provider value={{data:scoreState, setNewPosWithId}} >
      <div className='  p-10 h-full w-full  grid grid-rows-[repeat(12,minmax(20px,1fr))] gap-2 bg-red-300 '>
        <CheckpointsHeader />
        <div className=' bg-green-200 flex w-full ' style={{ gridRow: "span 10" }}>
          <SideBar />
          <TrackContainer />
          <FinishLine />
        </div>
      </div>
        </scoreContext.Provider>

    </main>
  )
}
