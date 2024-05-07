import React from 'react'
import './index.css'

function ChatMessageOther({ data }) {
    return (
        <div className="rightSideCont h-full w-full mb-2 rounded-md">
            <div className='self-message-cont float-left shadow1 p-4'>
                <div className='self-message-msg'>{data.content}</div>
                <div className='flex justify-end'>
                    <p className='self-message-timeStamp text-sm font-thin'>{data.date}</p>
                </div>
            </div>
        </div>

    )
}

export default ChatMessageOther