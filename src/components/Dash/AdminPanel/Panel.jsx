import React from 'react'
import Activity from '../Activity/Activity'
import Stats from '../Activity/Stats'
function Panel() {
    return (
        <div className='h-full bg-white-300 overflow-scroll'>
            <Stats />
            <Activity />
            <Activity />
        </div>
    )
}

export default Panel