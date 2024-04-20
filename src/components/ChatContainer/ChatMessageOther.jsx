import React from 'react'
import './index.css'

function ChatMessageOther({ data }) {
    return (
        <div className="rightSideCont h-full w-full mb-2 rounded-md">
            <div className='self-message-cont float-left shadow1 p-4'>


                <div className='self-message-msg'>Hello Jhon</div>
                <div className='flex justify-end'>
                    <p className='self-message-timeStamp text-sm font-thin'>10:11</p>
                </div>

            </div>
        </div>

    )
}

export default ChatMessageOther