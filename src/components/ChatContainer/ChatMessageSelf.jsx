import React from 'react'
// import './index.css'

function ChatMessageSelf({ data }) {
    return (
        <div className="rightSideCont h-full w-full mb-2 rounded-md">
            <div className='self-message-cont float-right shadow1 p-4'>
                <div className='self-message-msg'>Hi Jhon</div>
                <div className='flex justify-end'>
                    <p className='self-message-timeStamp text-sm font-thin'>10:12</p>
                </div>
            </div>
        </div>

    )
}

export default ChatMessageSelf