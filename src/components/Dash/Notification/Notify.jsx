import React from 'react'
import NotifyCard from '../Activity/NotifyCard'

function Notify() {
    return (
        <div className='h-[100%] flex flex-row flex-wrap justify-start items-center bg-white-300 overflow-scroll'>
            <NotifyCard />
            <NotifyCard />
            <NotifyCard />
        </div>
    )
}

export default Notify