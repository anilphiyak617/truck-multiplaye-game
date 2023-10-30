import React from 'react'
import styles from './styles.module.css'
// relative w - 6 flex h - 6 items - center justify - center font - mono font - bold`
function GamerInput({ id }: { id: number | undefined }) {
    return (
        <div className='flex items-center gap-2 p-3'>
            <div className={`border-black border-trs  w-6  bg-white h - 6 items-center text-center justify-center font-mono font-bold` }>
                {id}
            </div>
            <input placeholder='player name' className={`h-6 w-full text-sm pl-2 pr-2 p-1 rounded-sm + ${styles['border-corner'] }`} />
        </div>
    );
}

export default GamerInput