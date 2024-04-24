import React from 'react'
import Activity from '../Activity/Activity'
import Stats from '../Activity/Stats'
function Panel() {
    return (
        <div className='w-auto h-[100vh] bg-white-300 overflow-scroll'>
            <Stats />
            <Activity />
            <Activity />
        </div>
    )
}

export default Panel